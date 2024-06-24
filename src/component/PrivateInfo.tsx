import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NextButton from "../buttons/NextButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  name: string;
  lastName: string;
  files: string;
  aboutme: string;
  email: string;
  phone: string;
};

function PrivateInfo() {
  const schema = yup.object({
    name: yup.string().required(),
    lastName: yup.string().required(),
    files: yup.string().required(),
    aboutme: yup.string().required(),
    email: yup.string().required(),
    phone: yup.string().required(),
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>პირადი ინფო</h1>
      <span>1/3</span>
      <label htmlFor="name">სახელი</label>
      <input type="text" id="name" {...register("name")}></input>
      <span>მინიმუმ 2 ასო, ქართული ასოები</span>
      <label htmlFor="lastName">გვარი</label>
      <input type="text" id="lastName" {...register("lastName")}></input>
      <span>მინიმუმ 2 ასო, ქართული ასოები</span>
      <label htmlFor="files">პირადი ინფოს ატვირთვა</label>
      <input type="file" id="files" {...register("files")}></input>
      <label htmlFor="aboutme">ჩემ შესახებ (არასავალდებულო)</label>
      <input type="text" id="aboutme" {...register("aboutme")}></input>
      <label htmlFor="mail">ელ.ფოსტა</label>
      <input type="email" id="mail" {...register("email")}></input>
      <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
      <label htmlFor="phone">მობილურის ნომერი</label>
      <input type="tel" id="phone" {...register("phone")}></input>
      <span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
      <NextButton />
    </form>
  );
}

export default PrivateInfo;
