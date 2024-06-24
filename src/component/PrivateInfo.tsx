import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NextButton from "../buttons/NextButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const regexLetters = /^[\u10A0-\u10FF]+$/;
const regexMail = /@redberry\.ge$/;
const regexTel = /^\+995(5\d{8}|\d{9})$/;

type Inputs = {
  name: string;
  lastName: string;
  files: string;
  aboutme?: string;
  email: string;
  phone: string;
};

function PrivateInfo() {
  const schema = yup.object({
    name: yup
      .string()
      .required()
      .min(2, "მინიმუმ 2 ასო, ქართული ასოები")
      .test("შეცდომა-სახელი", "მინიმუმ 2 ასო, ქართული ასოები", (value) =>
        regexLetters.test(value)
      ),
    lastName: yup
      .string()
      .required()
      .min(2, "მინიმუმ 2 ასო, ქართული ასოები")
      .test("შეცდომა-გვარი", "მინიმუმ 2 ასო, ქართული ასოები", (value) =>
        regexLetters.test(value)
      ),
    files: yup.string().required(),
    aboutme: yup.string(),
    email: yup
      .string()
      .required()
      .test("შეცდომა-ფოსტა", "უნდა მთავრდებოდეს @redberry.ge-ით", (value) =>
        regexMail.test(value)
      ),
    phone: yup
      .string()
      .required()
      .test(
        "შეცდომა-ტელეფონი",
        "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
        (value) => regexMail.test(value)
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
  console.log(errors.name?.message);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>პირადი ინფო</h1>
      <span>1/3</span>
      <label htmlFor="name">სახელი</label>
      <input type="text" id="name" {...register("name")}></input>
      {errors.name && <span>{errors.name.message}</span>}
      <label htmlFor="lastName">გვარი</label>
      <input type="text" id="lastName" {...register("lastName")}></input>
      {errors.lastName && <span>{errors.lastName.message}</span>}
      <label htmlFor="files">პირადი ინფოს ატვირთვა</label>
      <input type="file" id="files" {...register("files")}></input>
      <label htmlFor="aboutme">ჩემ შესახებ (არასავალდებულო)</label>
      <input type="text" id="aboutme" {...register("aboutme")}></input>
      <label htmlFor="mail">ელ.ფოსტა</label>
      <input type="email" id="mail" {...register("email")}></input>
      {errors.email && <span>{errors.email.message}</span>}
      <label htmlFor="phone">მობილურის ნომერი</label>
      <input type="tel" id="phone" {...register("phone")}></input>
      {errors.phone && <span>{errors.phone.message}</span>}
      <NextButton />
    </form>
  );
}

export default PrivateInfo;
