import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import WorkHistory from "./WorkHistory";
import ExperienceInputs from "./ExperienceInputs";
import { useEffect, useState } from "react";

import BackButtonArrow from "../buttons/BackButtonArrow";
import Profile from "../component/Profile";
import NextButton from "../buttons/NextButton";
import { useLocation, useNavigate } from "react-router-dom";

type formType = {
  position: string;
  employer: string;
  startNumber: string;
  endNumber: string;
  description: string;
};

const schema = yup.object({
  position: yup.string().min(2, "").required("სავალდებულო ველი"),
  employer: yup.string().min(2, "").required("სავალდებულო ველი"),
  startNumber: yup.string().min(2, "").required("სავალდებულო ველი"),
  endNumber: yup.string().min(2, "").required("სავალდებულო ველი"),
  description: yup.string().min(2, "").required("სავალდებულო ველი"),
});

export default function EnterPersonalData() {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
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
    navigate("/educationInfo");
  };

  const positionInput = watch("position");
  const employerInput = watch("employer");
  const startNumberInput = watch("startNumber");
  const endNumberInput = watch("endNumber");
  const descriptionInput = watch("description");

  useEffect(() => {
    if (positionInput) {
      localStorage.setItem("position", positionInput);
    }
    if (employerInput) {
      localStorage.setItem("employer", employerInput);
    }
    if (startNumberInput) {
      localStorage.setItem("startNumber", startNumberInput);
    }
    if (endNumberInput) {
      localStorage.setItem("endNumber", endNumberInput);
    }
    if (descriptionInput) {
      localStorage.setItem("description", descriptionInput);
    }
  }, [
    positionInput,
    employerInput,
    startNumberInput,
    endNumberInput,
    descriptionInput,
  ]);

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
                startNumberInput={startNumberInput}
                endNumberInput={endNumberInput}
                descriptionInput={descriptionInput}
              />
              <div className="mt-10">
                <Button type="button" variant="secondary">
                  მეტი გამოცდილების დამატება
                </Button>
              </div>

              <div className="mt-[115px] flex justify-between pb-[65px]">
                <Button to={"/privateInfo"} variant="outline" size="large">
                  ᲣᲙᲐᲜ
                </Button>
                <NextButton />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Profile
          positionInput={positionInput}
          employerInput={employerInput}
          startNumberInput={startNumberInput}
          endNumberInput={endNumberInput}
          descriptionInput={descriptionInput}
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
