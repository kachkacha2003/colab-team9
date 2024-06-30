import Button from "../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import EducationHistory from "../education/EducationHistory";
import EducationInputs from "../education/EducationInputs";
import { useState } from "react";

import BackButtonArrow from "../../buttons/BackButtonArrow";
// import Profile from "../../component/Profile";

// ზედა და ქვედა ნაწილი
type formType = {
  education: string;
  degree: string;
  end_date: string;
  info: string;
};

const schema = yup.object({
  education: yup.string().min(2, "").required("სავალდებულო ველი"),
  degree: yup.string().min(2, "").required("სავალდებულო ველი"),
  end_date: yup.string().required("სავალდებულო ველი"),
  info: yup.string().min(2, "").required("სავალდებულო ველი"),
});

export default function EducationMain() {
  const [count, setCount] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<formType>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<formType> = (data) => {
    console.log(data);
    reset();
  };

  const educationInput = watch("education");
  const degreeInput = watch("degree");
  const end_dateInput = watch("end_date");
  const infoInput = watch("info");

  return (
    <div className="flex">
      <div className="bg-gray-100">
        <div className="flex pl-12 pt-12 pr-32 ">
          <BackButtonArrow location="/privateInfo" />

          <div className="ml-16 w-[798px]">
            <div className=" flex justify-between border-b border-black">
              <span className="text-2xl	font-bold">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</span>
              <span className="text-xl">3/3</span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-[70px] border-b border-mediumGray pb-12"
            >
              {[...Array(count)].map((_, index) => (
                <EducationInputs
                  key={index}
                  register={register}
                  errors={errors}
                  watch={watch}
                />
              ))}
              <div className="mt-10">
                <Button
                  count={count}
                  setCount={setCount}
                  type="button"
                  variant="secondary"
                >
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

      <EducationHistory
        educationInput={educationInput}
        degreeInput={degreeInput}
        end_dateInput={end_dateInput}
        infoInput={infoInput}
      />
    </div>
  );
}
