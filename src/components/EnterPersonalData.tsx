import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PersonalData from "./PersonalData";
import ExperienceInputs from "./ExperienceInputs";

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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<formType> = (data) => {
    console.log(data);
    reset();
  };

  const positionInput = watch("position");
  const employerInput = watch("employer");
  const startNumberInput = watch("startNumber");
  const endNumberInput = watch("endNumber");
  const descriptionInput = watch("description");

  return (
    <div className="flex">
      <div className="bg-gray-100">
        <div className="flex pl-12 pt-12 pr-32 ">
          <div className="">
            <Button variant="primary" size="medium" isRound className="p-2">
              <img
                src="/images/lefterrow.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </Button>
          </div>
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
              <div className="">
                <div className="mt-[115px] flex justify-between pb-[65px]">
                  <Button type="button" variant="outline" size="large">
                    ᲣᲙᲐᲜ
                  </Button>
                  <Button
                    variant="outline"
                    size="large"
                    onClick={handleSubmit((data) => {
                      console.log(data);
                      reset();
                    })}
                  >
                    შემდეგი
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <PersonalData
        positionInput={positionInput}
        employerInput={employerInput}
        startNumberInput={startNumberInput}
        endNumberInput={endNumberInput}
        descriptionInput={descriptionInput}
      />
    </div>
  );
}
