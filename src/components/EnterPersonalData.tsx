import Button from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PersonalData from "./PersonalData";

type formType = {
  position: string;
  employer: string;
  startNumber: string;
  endNumber: string;
  description: string;
};

const schema = yup.object({
  position: yup.string().required("სავალდებულო ველი"),
  employer: yup.string().required("სავალდებულო ველი"),
  startNumber: yup.string().required("სავალდებულო ველი"),
  endNumber: yup.string().required("სავალდებულო ველი"),
  description: yup.string().required("სავალდებულო ველი"),
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
            <Button
              variant="primary"
              size="medium"
              isRound
              onClick={() => console.log("Clicked!")}
              className="p-2"
            >
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
              <p className="font-medium">თანამდებობა</p>
              <input
                type="text"
                {...register("position")}
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                className="w-full px-4 py-[14px] mt-2 border outline-none rounded"
              />
              {errors.position ? (
                <p className="text-mediumRed">{errors.position.message}</p>
              ) : null}
              <span className="text-sm font-light	mt-2">მინიმუმ 2 სიმბოლო</span>
              <p className="font-medium mt-3">დამსაქმებელი</p>
              <input
                type="text"
                {...register("employer")}
                placeholder="დამსაქმებელი"
                className="w-full px-4 py-[14px] mt-2 border outline-none rounded"
              />
              {errors.employer ? (
                <p className="text-mediumRed">{errors.employer.message}</p>
              ) : null}
              <span className="text-sm font-light	mt-2">მინიმუმ 2 სიმბოლო</span>
              <div className="mt-5 flex justify-between">
                <div className="w-full">
                  <p className="font-medium">დაწყების რიცხვი</p>
                  <div className="flex justify-between">
                    <div className="">
                      <input
                        type="date"
                        {...register("startNumber")}
                        placeholder="mm / dd / yyyy"
                        className="w-[370px] px-4 py-[14px] mt-2 border outline-none rounded"
                      />
                      {errors.startNumber ? (
                        <p className="text-mediumRed">
                          {errors.startNumber.message}
                        </p>
                      ) : null}
                    </div>
                    <div className="">
                      <input
                        type="date"
                        {...register("endNumber")}
                        placeholder="mm / dd / yyyy"
                        className="w-[370px] px-4 py-[14px] mt-2 border outline-none rounded"
                      />
                      {errors.endNumber ? (
                        <p className="text-mediumRed">
                          {errors.endNumber.message}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <p className="font-medium">აღწერა</p>
                <textarea
                  placeholder="თქვენი თანამშრომლობა და ზოგადი აზრები"
                  {...register("description")}
                  className="w-full h-32 border mt-2 px-4 py-[14px] outline-none rounded resize-none"
                ></textarea>
                {errors.description ? (
                  <p className="text-mediumRed">{errors.description.message}</p>
                ) : null}
              </div>
              <div className="mt-10">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => console.log("Clicked!")}
                >
                  მეტი გამოცდილების დამატება
                </Button>
              </div>
              <div className="">
                <div className="mt-[115px] flex justify-between pb-[65px]">
                  <Button
                    type="button"
                    variant="outline"
                    size="large"
                    onClick={() => console.log("Clicked!")}
                  >
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
