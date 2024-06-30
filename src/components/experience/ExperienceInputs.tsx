import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputType = {
  position: string;
  employer: string;
  start_date: string;
  end_date: string;
  info: string;
};

//input file

interface ExperienceInputsProps {
  register: UseFormRegister<InputType>;
  errors: FieldErrors<InputType>;
  positionInput: string;
  employerInput: string;
  start_dateInput: string;
  end_dateInput: string;
  infoInput: string;
}

export default function ExperienceInputs({
  register,
  errors,
  positionInput,
  employerInput,
  start_dateInput,
  end_dateInput,
  infoInput,
}: ExperienceInputsProps) {
  return (
    <div className="border-b border-lightGray pb-11">
      <p className="font-medium">თანამდებობა</p>
      <div className="relative">
        <input
          defaultValue={
            localStorage.getItem("position") !== "undefined" &&
            localStorage.getItem("position") !== null
              ? localStorage.getItem("position") || ""
              : ""
          }
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
        {positionInput && positionInput.length >= 2 && !errors.position && (
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
      <span className="text-sm font-light	mt-2">მინიმუმ 2 სიმბოლო</span>

      <p className="font-medium mt-3">დამსაქმებელი</p>
      <div className="relative">
        <input
          defaultValue={
            localStorage.getItem("employer") !== "undefined" &&
            localStorage.getItem("employer") !== null
              ? localStorage.getItem("employer") || ""
              : ""
          }
          type="text"
          {...register("employer")}
          placeholder="დამსაქმებელი"
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
        {employerInput && employerInput.length >= 2 && !errors.employer && (
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
      <span className="text-sm font-light	mt-2">მინიმუმ 2 სიმბოლო</span>

      <div className="mt-5 flex justify-between">
        <div className="w-full">
          <div className="flex justify-between">
            <p className="font-medium">დაწყების რიცხვი</p>
            <p className="font-medium mr-[186px]">დამთავრების რიცხვი</p>
          </div>
          <div className="flex justify-between">
            <div className="relative">
              <input
                defaultValue={
                  localStorage.getItem("startNumber") !== "undefined" &&
                  localStorage.getItem("startNumber") !== null
                    ? localStorage.getItem("startNumber") || ""
                    : ""
                }
                type="date"
                {...register("start_date")}
                placeholder="mm / dd / yyyy"
                className={`w-[370px] px-4 py-[14px] mt-2 border outline-none rounded ${
                  errors.start_date
                    ? "border-red-500"
                    : start_dateInput &&
                      end_dateInput &&
                      new Date(start_dateInput) < new Date(end_dateInput)
                    ? "border-green-500"
                    : start_dateInput && end_dateInput
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.start_date ? (
                <p className="text-mediumRed">{errors.start_date.message}</p>
              ) : null}
            </div>
            <div className="relative">
              <input
                defaultValue={
                  localStorage.getItem("endNumber") !== "undefined" &&
                  localStorage.getItem("endNumber") !== null
                    ? localStorage.getItem("endNumber") || ""
                    : ""
                }
                type="date"
                {...register("end_date")}
                placeholder="mm / dd / yyyy"
                className={`w-[370px] px-4 py-[14px] mt-2 border outline-none rounded ${
                  errors.end_date
                    ? "border-red-500"
                    : start_dateInput &&
                      end_dateInput &&
                      new Date(start_dateInput) < new Date(end_dateInput)
                    ? "border-green-500"
                    : start_dateInput && end_dateInput
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.end_date ? (
                <p className="text-mediumRed">{errors.end_date.message}</p>
              ) : null}
            </div>
          </div>
          {start_dateInput && end_dateInput && (
            <p className="mt-2 text-red-500">
              {new Date(start_dateInput) < new Date(end_dateInput)
                ? ""
                : "დაწყების თარიღი მეტია ან ტოლია დასრულების თარიღზე"}
            </p>
          )}
        </div>
      </div>

      <div className="w-full mt-5">
        <p className="font-medium">აღწერა</p>
        <textarea
          defaultValue={
            localStorage.getItem("description") !== "undefined" &&
            localStorage.getItem("description") !== null
              ? localStorage.getItem("description") || ""
              : ""
          }
          placeholder="თქვენი თანამშრომლობა და ზოგადი აზრები"
          {...register("info")}
          className={`w-full h-32 border mt-2 px-4 py-[14px] outline-none rounded resize-none ${
            errors.info
              ? "border-red-500"
              : infoInput && infoInput.length >= 2
              ? "border-green-500"
              : "border-gray-300"
          }`}
        ></textarea>
        {errors.info ? (
          <p className="text-mediumRed">{errors.info.message}</p>
        ) : null}
      </div>
    </div>
  );
}
