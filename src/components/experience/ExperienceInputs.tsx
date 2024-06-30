import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputType = {
  position: string;
  employer: string;
  startNumber: string;
  endNumber: string;
  description: string;
};

//input file

interface ExperienceInputsProps {
  register: UseFormRegister<InputType>;
  errors: FieldErrors<InputType>;
  positionInput: string;
  employerInput: string;
  startNumberInput: string;
  endNumberInput: string;
  descriptionInput: string;
}

export default function ExperienceInputs({
  register,
  errors,
  positionInput,
  employerInput,
  startNumberInput,
  endNumberInput,
  descriptionInput,
}: ExperienceInputsProps) {
  return (
    <div className="border-b border-lightGray pb-11">
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
                    : startNumberInput &&
                      endNumberInput &&
                      new Date(startNumberInput) < new Date(endNumberInput)
                    ? "border-green-500"
                    : startNumberInput && endNumberInput
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.startNumber ? (
                <p className="text-mediumRed">{errors.startNumber.message}</p>
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
                    : startNumberInput &&
                      endNumberInput &&
                      new Date(startNumberInput) < new Date(endNumberInput)
                    ? "border-green-500"
                    : startNumberInput && endNumberInput
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.endNumber ? (
                <p className="text-mediumRed">{errors.endNumber.message}</p>
              ) : null}
            </div>
          </div>
          {startNumberInput && endNumberInput && (
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
          <p className="text-mediumRed">{errors.description.message}</p>
        ) : null}
      </div>
    </div>
  );
}
