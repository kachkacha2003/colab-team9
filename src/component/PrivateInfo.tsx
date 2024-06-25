import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NextButton from "../buttons/NextButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Profile from "./Profile";
import BackButtonArrow from "../buttons/BackButtonArrow";

const regexLetters = /^[\u10A0-\u10FF]+$/;
const regexMail = /@redberry\.ge$/;
const regexTel = /^\+995(5\d{8}|\d{9})$/;

function PrivateInfo() {
  const schema = yup.object({
    name: yup
      .string()
      .required("სახელი ცარიელი ვერ იქნება")
      .min(2, "მინიმუმ 2 ასო, ქართული ასოები")
      .test("შეცდომა-სახელი", "მინიმუმ 2 ასო, ქართული ასოები", (value) =>
        regexLetters.test(value)
      ),
    lastName: yup
      .string()
      .required("გვარი ცარიელი ვერ იქნება")
      .min(2, "მინიმუმ 2 ასო, ქართული ასოები")
      .test("შეცდომა-გვარი", "მინიმუმ 2 ასო, ქართული ასოები", (value) =>
        regexLetters.test(value)
      ),
    files: yup.string().required(),
    aboutme: yup.string(),
    email: yup
      .string()
      .required("ელ-ფოსტა ცარიელი ვერ იქნება")
      .test("შეცდომა-ფოსტა", "უნდა მთავრდებოდეს @redberry.ge-ით", (value) =>
        regexMail.test(value)
      ),
    phone: yup
      .string()
      .required("ტელეფონის ნომერი ცარიელი ვერ იქნება")
      .test(
        "შეცდომა-ტელეფონი",
        "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
        (value) => regexTel.test(value)
      ),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const name = watch("name");
  const lastName = watch("lastName");
  const files = watch("files");
  const aboutme = watch("aboutme");
  const email = watch("email");
  const phone = watch("phone");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex text-off-black leading-5 w-[822px]"
    >
      <BackButtonArrow />
      <div className="ml-[126px]  h-screen">
        <div className="flex justify-between mt-12 border-b border-off-black w-[800px]">
          <h1 className="font-bold text-2xl ">პირადი ინფო</h1>
          <span className="text-xl font-normal ">1/3</span>
        </div>
        <div className="mt-[77px] font-medium flex  ">
          <div className="flex flex-col">
            <label htmlFor="name">სახელი</label>
            <input
              placeholder="ანზორ"
              className="border-[1px] border-off-grey rounded w-[371px] h-12 pl-4 my-2"
              type="text"
              id="name"
              {...register("name")}
            ></input>
            {errors.name && (
              <span className="font-light text-[14px] text-[#2E2E2E]">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col ml-14">
            <label htmlFor="lastName">გვარი</label>
            <input
              placeholder="მუმლაძე"
              className="border-[1px] border-off-grey rounded w-[371px] h-12 pl-4 my-2 "
              type="text"
              id="lastName"
              {...register("lastName")}
            ></input>
            {errors.lastName && (
              <span className="font-light text-[14px] text-[#2E2E2E]">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-14">
          <label className="text-lg" htmlFor="files">
            პირადი ფოტოს ატვირთვა
          </label>
          <input
            className="ml-4 bg-[#0E80BF]"
            type="file"
            id="files"
            {...register("files")}
          ></input>
        </div>
        <div className="mt-14 flex flex-col ">
          <label htmlFor="aboutme" className="font-normal">
            ჩემ შესახებ (არასავალდებულო)
          </label>
          {/* w-[798px] h-[103px] */}
          <textarea
            placeholder="ზოგადი ინფო შენ შესახებ"
            className=" min-w-[300px]  min-h-[50px] max-w-[798px] max-h-[103px] h-[103px] text-top px-4 pt-[13px] border-[1px] border-off-grey rounded mt-2 resize"
            id="aboutme"
            {...register("aboutme")}
          ></textarea>
        </div>
        <div className="mt-[33px] flex flex-col ">
          <label className="font-medium" htmlFor="mail">
            ელ.ფოსტა
          </label>
          <input
            className="h-12 w-[798px] pl-4 my-2 border-[1px] border-off-grey rounded"
            placeholder="anzorr666@redberry.ge"
            type="email"
            id="mail"
            {...register("email")}
          ></input>
          {errors.email && (
            <span className="font-light text-[14px] text-[#2E2E2E]">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="mt-[29px]">
          <label className="font-medium" htmlFor="phone">
            მობილურის ნომერი
          </label>
          <input
            className="h-12 w-[798px] pl-4 my-2 border-[1px] border-off-grey rounded "
            placeholder="+995 551 12 34 56"
            type="tel"
            id="phone"
            {...register("phone")}
          ></input>
          {errors.phone && (
            <span className="font-light text-[14px] text-[#2E2E2E]">
              {errors.phone.message}
            </span>
          )}
        </div>
        <NextButton />
      </div>

      <div className="">
        <Profile
          name={name}
          lastName={lastName}
          files={files}
          aboutme={aboutme}
          email={email}
          phone={phone}
        />
      </div>
    </form>
  );
}

export default PrivateInfo;
