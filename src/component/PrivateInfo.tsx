import { useContext, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import NextButton from "../buttons/NextButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Profile from "./Profile";
import BackButtonArrow from "../buttons/BackButtonArrow";
import accept from "/images/accept.svg";
import decline from "/images/decline.svg";
import { useNavigate } from "react-router-dom";
import { GlobalAPI } from "../logic/ContextAPI";

const regexLetters = /^[\u10A0-\u10FF]+$/;
const regexMail = /@redberry\.ge$/;
const regexTel = /^\+995(5\d{8}|\d{9})$/;

function PrivateInfo() {
  const [count, setCount] = useState<number>(0);
  const { setMainInfo } = useContext(GlobalAPI);

  const navigate = useNavigate();

  const schema = yup.object({
    name: yup
      .string()
      .required("სახელი ცარიელი ვერ იქნება")
      .min(2, "მინიმუმ 2 ასო, ქართული ასოები")
      .test("შეცდომა-სახელი", "მინიმუმ 2 ასო, ქართული ასოები", (value) =>
        regexLetters.test(value ?? "")
      ),
    last_name: yup
      .string()
      .required("გვარი ცარიელი ვერ იქნება")
      .min(2, "მინიმუმ 2 ასო, ქართული ასოები")
      .test("შეცდომა-გვარი", "მინიმუმ 2 ასო, ქართული ასოები", (value) =>
        regexLetters.test(value ?? "")
      ),
    files: yup.string().required(),
    bio: yup.string(),
    email: yup
      .string()
      .required("ელ-ფოსტა ცარიელი ვერ იქნება")
      .test("შეცდომა-ფოსტა", "უნდა მთავრდებოდეს @redberry.ge-ით", (value) =>
        regexMail.test(value ?? "")
      ),
    number: yup
      .string()
      .required("ტელეფონის ნომერი ცარიელი ვერ იქნება")
      .test(
        "შეცდომა-ტელეფონი",
        "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
        (value) => regexTel.test(value ?? "")
      ),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const name = watch("name") ?? "";
  const last_name = watch("last_name") ?? "";
  const files = watch("files") ?? "";
  const bio = watch("bio") ?? "";
  const email = watch("email") ?? "";
  const number = watch("number") ?? "";

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setMainInfo(data);
    navigate("/experienceInfo", {
      state: data,
    });
  };

  useEffect(() => {
    if (name) localStorage.setItem("name", name);
    if (last_name) localStorage.setItem("last_name", last_name);
    if (files) localStorage.setItem("files", files);
    if (bio) localStorage.setItem("bio", bio);
    if (email) localStorage.setItem("email", email);
    if (number) localStorage.setItem("number", number);
  }, [name, last_name, files, email, number, bio]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex text-off-black leading-5 w-[1100px]"
    >
      <BackButtonArrow location={"/"} />
      <div className="pl-[126px] h-screen bg-[#F9F9F9]">
        <div className="flex justify-between mt-12 border-b border-off-black w-[800px] pb-3">
          <h1 className="font-bold text-2xl">პირადი ინფო</h1>
          <span className="text-xl font-normal">1/3</span>
        </div>
        <div className="mt-[77px] font-medium flex">
          <div className="flex flex-col relative">
            <label htmlFor="name">სახელი</label>
            <div
              className={`border-[1px] rounded w-[371px] h-12 pl-4 my-2 ${
                count === 1
                  ? errors.name
                    ? "border-[#EF5050]"
                    : "border-[#98E37E]"
                  : "border-off-grey"
              } flex justify-between`}
            >
              <input
                defaultValue={localStorage.getItem("name") ?? ""}
                className="outline-none w-full"
                placeholder="ანზორ"
                type="text"
                id="name"
                {...register("name")}
              />
            </div>
            {count === 1 &&
              (errors.name ? (
                <img
                  src={decline}
                  className="absolute right-[-40px] top-[38px]"
                  alt="error image"
                />
              ) : (
                <img
                  src={accept}
                  className="absolute right-[14px] top-[38px]"
                  alt="success image"
                />
              ))}
            {errors.name && (
              <span className="font-light text-[14px] text-[#2E2E2E]">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col ml-14 relative">
            <label htmlFor="last_name">გვარი</label>
            <div
              className={`border-[1px] border-off-grey rounded w-[371px] h-12 pl-4 my-2 ${
                count === 1
                  ? errors.last_name
                    ? "border-[#EF5050]"
                    : "border-[#98E37E]"
                  : "border-off-grey"
              } flex justify-between`}
            >
              <input
                defaultValue={localStorage.getItem("last_name") ?? ""}
                className="outline-none w-[272px]"
                placeholder="მუმლაძე"
                type="text"
                id="last_name"
                {...register("last_name")}
              />
            </div>
            {count === 1 &&
              (errors.last_name ? (
                <img
                  src={decline}
                  className="absolute right-[-40px] top-[38px]"
                  alt="error image"
                />
              ) : (
                <img
                  src={accept}
                  className="absolute right-[14px] top-[38px]"
                  alt="success image"
                />
              ))}
            {errors.last_name && (
              <span className="font-light text-[14px] text-[#2E2E2E]">
                {errors.last_name.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-14 flex">
          <label className="text-lg">პირადი ფოტოს ატვირთვა</label>
          <input
            className="ml-4 hidden"
            type="file"
            id="files"
            {...register("files")}
            onChange={(e) => {
              const file = e.target.files && e.target.files[0];
              if (file) {
                const imageUrl: string = URL.createObjectURL(file);
                setValue("files", imageUrl);
              }
            }}
          />
          <div className="ml-[19px] bg-[#0E80BF] w-[107px] h-[27px] flex justify-center items-center rounded text-white">
            <label htmlFor="files">ატვირთვა</label>
          </div>
        </div>
        <div className="mt-14 flex flex-col">
          <label htmlFor="bio" className="font-normal">
            ჩემ შესახებ (არასავალდებულო)
          </label>
          <textarea
            defaultValue={localStorage.getItem("bio") ?? ""}
            placeholder="ზოგადი ინფო შენ შესახებ"
            className="min-w-[300px] min-h-[50px] max-w-[798px] max-h-[103px] h-[103px] text-top px-4 pt-[13px] border-[1px] border-off-grey rounded mt-2 resize outline-none"
            id="bio"
            {...register("bio")}
          />
        </div>
        <div className="mt-[33px] relative flex flex-col">
          <label className="font-medium" htmlFor="mail">
            ელ.ფოსტა
          </label>
          <div
            className={`h-12 w-[798px] pl-4 my-2 border-[1px] border-off-grey rounded ${
              count === 1
                ? errors.email
                  ? "border-[#EF5050]"
                  : "border-[#98E37E]"
                : "border-off-grey"
            } flex justify-between`}
          >
            <input
              defaultValue={localStorage.getItem("email") ?? ""}
              className="outline-none w-[900px]"
              placeholder="anzorr666@redberry.ge"
              type="text"
              id="mail"
              {...register("email")}
            />
            {count === 1 &&
              (errors.email ? (
                <img
                  src={decline}
                  className="absolute right-[14px] top-[38px]"
                  alt="error image"
                />
              ) : (
                <img
                  src={accept}
                  className="absolute right-[14px] top-[38px]"
                  alt="success image"
                />
              ))}
          </div>
          {errors.email && (
            <span className="font-light text-[14px] text-[#2E2E2E]">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="mt-[29px] flex flex-col relative">
          <label className="font-medium" htmlFor="number">
            მობილურის ნომერი
          </label>
          <div
            className={`h-12 w-[798px] pl-4 my-2 border-[1px] border-off-grey rounded ${
              count === 1
                ? errors.number
                  ? "border-[#EF5050]"
                  : "border-[#98E37E]"
                : "border-off-grey"
            } flex justify-between`}
          >
            <input
              defaultValue={localStorage.getItem("number") ?? ""}
              className="outline-none w-[900px]"
              placeholder="+995 551 12 34 56"
              type="tel"
              id="number"
              {...register("number")}
            />
            {count === 1 &&
              (errors.number ? (
                <img
                  src={decline}
                  className="absolute right-[14px] top-[38px]"
                  alt="error image"
                />
              ) : (
                <img
                  src={accept}
                  className="absolute right-[14px] top-[38px]"
                  alt="success image"
                />
              ))}
          </div>
          {errors.number && (
            <span className="font-light text-[14px] text-[#2E2E2E]">
              {errors.number.message}
            </span>
          )}
        </div>
        <NextButton setCount={setCount} />
      </div>
      <Profile
        name={name}
        last_name={last_name}
        bio={bio}
        files={files}
        number={number}
        email={email}
      />
    </form>
  );
}

export default PrivateInfo;
