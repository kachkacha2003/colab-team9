import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NextButton from "../buttons/NextButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Profile from "./Profile";

const regexLetters = /^[\u10A0-\u10FF]+$/;
const regexMail = /@redberry\.ge$/;
const regexTel = /^\+995(5\d{8}|\d{9})$/;

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
      <Profile
        name={name}
        lastName={lastName}
        files={files}
        aboutme={aboutme}
        email={email}
        phone={phone}
      />
    </form>
  );
}

export default PrivateInfo;
