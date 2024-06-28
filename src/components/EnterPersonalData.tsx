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
              <div className="">
                <p className="font-medium">თანამდებობა</p>
                <div className="relative">
                  <input
                    type="text"
                    {...register("position")}
                    placeholder="დეველოპერი, დიზაინერი, ა.შ."
                    className={`w-full px-4 py-[14px] mt-2 border outline-none rounded ${
                      errors.position
                        ? "border-red-500"
                        : positionInput && positionInput.length >= 2
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.position && (
                    <img
                      src="/images/error-icon.png"
                      alt="Error"
                      className="absolute top-9 -right-8 transform -translate-y-1/2 w-6 h-6"
                    />
                  )}
                  {positionInput &&
                    positionInput.length >= 2 &&
                    !errors.position && (
                      <img
                        src="/images/success-icon.png"
                        alt="Success"
                        className="absolute right-4 transform top-6 w-6 h-6"
                      />
                    )}
                </div>
                {errors.position ? (
                  <p className="text-mediumRed">{errors.position.message}</p>
                ) : null}
                <span className="text-sm font-light	mt-2">
                  მინიმუმ 2 სიმბოლო
                </span>
                <p className="font-medium mt-3">დამსაქმებელი</p>
                <div className="relative">
                  <input
                    type="text"
                    {...register("employer")}
                    placeholder="დეველოპერი, დიზაინერი, ა.შ."
                    className={`w-full px-4 py-[14px] mt-2 border outline-none rounded ${
                      errors.employer
                        ? "border-red-500"
                        : employerInput && employerInput.length >= 2
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.employer && (
                    <img
                      src="/images/error-icon.png"
                      alt="Error"
                      className="absolute top-9 -right-8 transform -translate-y-1/2 w-6 h-6"
                    />
                  )}
                  {employerInput &&
                    employerInput.length >= 2 &&
                    !errors.employer && (
                      <img
                        src="/images/success-icon.png"
                        alt="Success"
                        className="absolute right-4 transform top-6 w-6 h-6"
                      />
                    )}
                </div>
                {errors.employer ? (
                  <p className="text-mediumRed">{errors.employer.message}</p>
                ) : null}
                <span className="text-sm font-light	mt-2">
                  მინიმუმ 2 სიმბოლო
                </span>
                <div className="mt-5 flex justify-between">
                  <div className="w-full">
                    <p className="font-medium">დაწყების რიცხვი</p>
                    <div className="flex justify-between">
                      <div className="relative">
                        <input
                          type="date"
                          {...register("startNumber")}
                          placeholder="mm / dd / yyyy"
                          className={`w-[370px] px-4 py-[14px] mt-2 border outline-none rounded ${
                            errors.startNumber
                              ? "border-red-500"
                              : startNumberInput && startNumberInput.length >= 2
                              ? "border-green-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.startNumber ? (
                          <p className="text-mediumRed">
                            {errors.startNumber.message}
                          </p>
                        ) : null}
                      </div>
                      <div className="relative">
                        <input
                          type="date"
                          {...register("endNumber")}
                          placeholder="mm / dd / yyyy"
                          className={`w-[370px] px-4 py-[14px] mt-2 border outline-none rounded ${
                            errors.endNumber
                              ? "border-red-500"
                              : endNumberInput && endNumberInput.length >= 2
                              ? "border-green-500"
                              : "border-gray-300"
                          }`}
                        />
                        {errors.endNumber ? (
                          <p className="text-mediumRed">
                            {errors.endNumber.message}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    {startNumberInput &&
                      endNumberInput &&
                      !errors.startNumber &&
                      !errors.endNumber && (
                        <p className="mt-2 text-red-500">
                          {new Date(startNumberInput) < new Date(endNumberInput)
                            ? ""
                            : "დაწყების თარიღი მეტია ან ტოლია დასრულების თარიღზე"}
                        </p>
                      )}
                  </div>
                </div>
                <div className="w-full mt-5">
                  <p className="font-medium">აღწერა</p>
                  <textarea
                    placeholder="თქვენი თანამშრომლობა და ზოგადი აზრები"
                    {...register("description")}
                    className={`w-full h-32 border mt-2 px-4 py-[14px] outline-none rounded resize-none ${
                      errors.description
                        ? "border-red-500"
                        : descriptionInput && descriptionInput.length >= 2
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.description ? (
                    <p className="text-mediumRed">
                      {errors.description.message}
                    </p>
                  ) : null}
                </div>
              </div>
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
