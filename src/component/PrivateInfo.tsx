import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NextButton from "../buttons/NextButton";

type Inputs = {
  name: string;
  lastName: string;
  files: string;
  aboutme: string;
  email: string;
  phone: string;
};

function PrivateInfo() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>პირადი ინფო</h1>
      <span>1/3</span>
      <label htmlFor="name">სახელი</label>
      <input type="text" id="name" {...register("name")}></input>
      <label htmlFor="lastName">გვარი</label>
      <input type="text" id="lastName" {...register("lastName")}></input>
      <label htmlFor="files">პირადი ინფოს ატვირთვა</label>
      <input type="file" id="files" {...register("files")}></input>
      <label htmlFor="aboutme">ჩემ შესახებ (არასავალდებულო)</label>
      <input type="text" id="aboutme" {...register("aboutme")}></input>
      <label htmlFor="mail">ელ.ფოსტა</label>
      <input type="email" id="mail" {...register("email")}></input>
      <label htmlFor="phone">მობილურის ნომერი</label>
      <input type="tel" id="phone" {...register("phone")}></input>
      <NextButton />
    </form>
  );
}

export default PrivateInfo;
