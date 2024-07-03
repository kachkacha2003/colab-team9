import Button from "../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ExperienceInputs from "./ExperienceInputs";
import { useContext, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import BackButtonArrow from "../../buttons/BackButtonArrow";
import Profile from "../../component/Profile";
import { GlobalAPI } from "../../logic/ContextAPI";
import WorkHistory from "./WorkHistory";

// ზედა და ქვედა ნაწილი
type formType = {
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
};

const schema = yup.object({
  position: yup.string().min(2, "").required("სავალდებულო ველი"),
  employer: yup.string().min(2, "").required("სავალდებულო ველი"),
  start_date: yup.string().min(2, "").required("სავალდებულო ველი"),
  end_date: yup.string().min(2, "").required("სავალდებულო ველი"),
  info: yup.string().min(2, "").required("სავალდებულო ველი"),
});

export default function EnterPersonalData() {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  const { setExperience } = useContext(GlobalAPI);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formType>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<formType> = (data) => {
    console.log(data);
    setExperience(data);
    navigate("/educationInfo");
  };

  const positionInput = watch("position");
  const employerInput = watch("employer");
  const start_dateInput = watch("start_date");
  const end_dateInput = watch("end_date");
  const infoInput = watch("info");

  useEffect(() => {
    if (positionInput) {
      localStorage.setItem("position", positionInput);
    }
    if (employerInput) {
      localStorage.setItem("employer", employerInput);
    }
    if (start_dateInput) {
      localStorage.setItem("startNumber", start_dateInput);
    }
    if (end_dateInput) {
      localStorage.setItem("endNumber", end_dateInput);
    }
    if (infoInput) {
      localStorage.setItem("description", infoInput);
    }
  }, [positionInput, employerInput, start_dateInput, end_dateInput, infoInput]);

  return (
    <div className="flex">
      <div className="bg-gray-100">
        <div className="flex pl-12 pt-12 pr-32 ">
          <BackButtonArrow location="/privateInfo" />

          <div className="ml-16 w-[798px]">
            <div className=" flex justify-between border-b border-black">
              <span className="text-2xl	font-bold">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</span>
              <span className="text-xl">2/3</span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-[70px] border-b border-mediumGray pb-12"
            >
              <ExperienceInputs
                register={register}
                errors={errors}
                positionInput={positionInput}
                employerInput={employerInput}
                start_dateInput={start_dateInput}
                end_dateInput={end_dateInput}
                infoInput={infoInput}
              />
              <div className="mt-10">
                <Button type="button" variant="secondary">
                  მეტი გამოცდილების დამატება
                </Button>
              </div>
              <div className="">
                <div className="mt-[115px] flex justify-between pb-[65px]">
                  <Button type="button" variant="outline" size="large">
                    ᲣᲙᲐᲜ
                  </Button>
                  <Button
                    variant="outline"
                    size="large"
                    onClick={handleSubmit(onSubmit)}
                  >
                    შემდეგი
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <Profile
          positionInput={positionInput}
          employerInput={employerInput}
          start_dateInput={start_dateInput}
          end_dateInput={end_dateInput}
          infoInput={infoInput}
          name={state.name}
          last_name={state.last_name}
          bio={state.bio}
          files={state.files}
          email={state.email}
          number={state.number}
        />
      </div>
    </div>
  );
}
