import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";

type InputType = {
  education: string;
  degree: string;
  end_date: string;
  info: string;
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
  const education = watch("education");
  const degree = watch("degree");
  const end_date = watch("end_date");
  const info = watch("info");

  return (
    <div className="border-b border-lightGray pb-11">
      <p className="font-medium">სასწავლებელი</p>
      <div className="relative">
        <input
          type="text"
          {...register("education")}
          placeholder="სასწავლებელი"
          className={`w-full px-4 py-[14px] mt-2 border outline-none rounded ${
            errors.education
              ? "border-red-500"
              : education && education.length >= 2
              ? "border-green-500"
              : "border-gray-300"
          }`}
        />
        {errors.education && (
          <img
            src="/images/error-icon.png"
            alt="Error"
            className="absolute top-9 -right-8 transform -translate-y-1/2 w-6 h-6"
          />
        )}
        {education && education.length >= 2 && !errors.education && (
          <img
            src="/images/success-icon.png"
            alt="Success"
            className="absolute right-4 transform top-6 w-6 h-6"
          />
        )}
      </div>
      {errors.education ? (
        <p className="text-mediumRed">{errors.education.message}</p>
      ) : null}
      <span className="text-sm font-light mt-2">მინიმუმ 2 სიმბოლო</span>
      <div className="flex justify-between items-center">
        <p className="font-medium mt-3">ხარისხი</p>
        <p className="font-medium mr-[180px]">დამთავრების თარიღი</p>
      </div>
      <div className="flex">
        <div className="relative">
          <select
            title="title"
            {...register("degree")}
            className={`w-[370px] px-4 py-[14px] mt-2 border outline-none rounded ${
              errors.degree
                ? "border-red-500"
                : degree && degree !== ""
                ? "border-green-500"
                : "border-gray-300"
            }`}
          >
            <option value="">აირჩიეთ ხარისხი</option>
            <option value="საშუალო სკოლის დიპლომი">
              საშუალო სკოლის დიპლომი
            </option>
            <option value="ზოგადსაგანმანათლებლო დიპლომი">
              ზოგადსაგანმანათლებლო დიპლომი
            </option>
            <option value="ბაკალავრი">ბაკალავრი</option>
            <option value="მაგისტრი">მაგისტრი</option>
            <option value="დოქტორი">დოქტორი</option>
            <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
            <option value="სტუდენტი">სტუდენტი</option>
            <option value="კოლეჯი (ხარისხის გარეშე)">
              კოლეჯი (ხარისხის გარეშე)
            </option>
            <option value="სხვა">სხვა</option>
          </select>
          <span className="text-sm font-light mt-2">აირჩიეთ ხარისხი</span>
        </div>
        {errors.degree ? (
          <p className="text-mediumRed">{errors.degree.message}</p>
        ) : null}
        <div className="">
          <div className="relative">
            <input
              type="date"
              {...register("end_date")}
              className={`w-[370px] px-4 py-[14px] mt-2 border outline-none rounded ${
                errors.end_date
                  ? "border-red-500"
                  : end_date
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          {errors.end_date ? (
            <p className="text-mediumRed">{errors.end_date.message}</p>
          ) : null}
        </div>
      </div>

      <div className="w-full mt-5">
        <p className="font-medium">აღწერა</p>
        <textarea
          placeholder="განათლების აღწერა"
          {...register("info")}
          className={`w-full h-32 border mt-2 px-4 py-[14px] outline-none rounded resize-none ${
            errors.info
              ? "border-red-500"
              : info && info.length >= 2
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
