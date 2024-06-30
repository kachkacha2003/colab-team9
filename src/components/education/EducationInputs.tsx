import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";

type InputType = {
  school: string;
  degree: string;
  endeducationDate: string;
  description: string;
};

interface ExperienceInputsProps {
  register: UseFormRegister<InputType>;
  errors: FieldErrors<InputType>;
  watch: UseFormWatch<InputType>;
}

export default function EducationInputs({
  register,
  errors,
  watch,
}: ExperienceInputsProps) {
  const school = watch("school");
  const degree = watch("degree");
  const endeducationDate = watch("endeducationDate");
  const description = watch("description");

  return (
    <div className="border-b border-lightGray pb-11">
      <p className="font-medium">სასწავლებელი</p>
      <div className="relative">
        <input
          type="text"
          {...register("school")}
          placeholder="სასწავლებელი"
          className={`w-full px-4 py-[14px] mt-2 border outline-none rounded ${
            errors.school
              ? "border-red-500"
              : school && school.length >= 2
              ? "border-green-500"
              : "border-gray-300"
          }`}
        />
        {errors.school && (
          <img
            src="/images/error-icon.png"
            alt="Error"
            className="absolute top-9 -right-8 transform -translate-y-1/2 w-6 h-6"
          />
        )}
        {school && school.length >= 2 && !errors.school && (
          <img
            src="/images/success-icon.png"
            alt="Success"
            className="absolute right-4 transform top-6 w-6 h-6"
          />
        )}
      </div>
      {errors.school ? (
        <p className="text-mediumRed">{errors.school.message}</p>
      ) : null}
      <span className="text-sm font-light mt-2">მინიმუმ 2 სიმბოლო</span>
      <div className="flex">
        <p className="font-medium mt-3">ხარისხი</p>
        <div className="relative">
          <input
            type="text"
            {...register("degree")}
            placeholder="ხარისხი"
            className={`w-full px-4 py-[14px] mt-2 border outline-none rounded ${
              errors.degree
                ? "border-red-500"
                : degree && degree.length >= 2
                ? "border-green-500"
                : "border-gray-300"
            }`}
          />
          {errors.degree && (
            <img
              src="/images/error-icon.png"
              alt="Error"
              className="absolute top-9 -right-8 transform -translate-y-1/2 w-6 h-6"
            />
          )}
          {degree && degree.length >= 2 && !errors.degree && (
            <img
              src="/images/success-icon.png"
              alt="Success"
              className="absolute right-4 transform top-6 w-6 h-6"
            />
          )}
        </div>
        {errors.degree ? (
          <p className="text-mediumRed">{errors.degree.message}</p>
        ) : null}
        <span className="text-sm font-light mt-2">მინიმუმ 2 სიმბოლო</span>
        <div className="mt-5">
          <p className="font-medium">დამთავრების თარიღი</p>
          <div className="relative">
            <input
              type="date"
              {...register("endeducationDate")}
              className={`w-full px-4 py-[14px] mt-2 border outline-none rounded ${
                errors.endeducationDate
                  ? "border-red-500"
                  : endeducationDate
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
            />
            {errors.endeducationDate && (
              <img
                src="/images/error-icon.png"
                alt="Error"
                className="absolute top-9 -right-8 transform -translate-y-1/2 w-6 h-6"
              />
            )}
            {endeducationDate && !errors.endeducationDate && (
              <img
                src="/images/success-icon.png"
                alt="Success"
                className="absolute right-4 transform top-6 w-6 h-6"
              />
            )}
          </div>
          {errors.endeducationDate ? (
            <p className="text-mediumRed">{errors.endeducationDate.message}</p>
          ) : null}
        </div>
      </div>

      <div className="w-full mt-5">
        <p className="font-medium">აღწერა</p>
        <textarea
          placeholder="განათლების აღწერა"
          {...register("description")}
          className={`w-full h-32 border mt-2 px-4 py-[14px] outline-none rounded resize-none ${
            errors.description
              ? "border-red-500"
              : description && description.length >= 2
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
