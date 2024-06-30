import mail from "/images/email.svg";
import telphone from "/images/phone.svg";
import logo from "/images/LOGO-12.png";
import WorkHistory from "../components/WorkHistory";

type TProfile = {
  name: string;
  last_name: string;
  number: string;
  bio: string;
  files: string;
  email: string;
  positionInput: string;
  employerInput: string;
  startNumberInput: string;
  endNumberInput: string;
  descriptionInput: string;
};

function Profile({
  name,
  last_name,
  number,
  bio,
  files,
  email,
  positionInput,
  employerInput,
  startNumberInput,
  endNumberInput,
  descriptionInput,
}: TProfile) {
  return (
    <div className="ml-[80px] relative min-w-[622px] h-screen ">
      <div className="flex ">
        <div className="w-[400px] mt-[68px] ">
          <h1 className="text-mediumRed text-4xl font-bold flex 	">
            {name
              ? name
              : localStorage.getItem("name")
              ? localStorage.getItem("name")
              : null}
            &nbsp;
            {last_name
              ? last_name
              : localStorage.getItem("last_name")
              ? localStorage.getItem("last_name")
              : null}
          </h1>
          <div className="flex mt-[17px]">
            {localStorage.getItem("email") || email ? (
              <img src={mail} alt="email icon" />
            ) : null}
            <address className="text-lg ml-[10px]	">
              {email
                ? email
                : localStorage.getItem("email")
                ? localStorage.getItem("email")
                : null}
            </address>
          </div>
          <div className="flex mt-[10px]">
            {localStorage.getItem("number") || number ? (
              <img src={telphone} alt="number icon" />
            ) : null}
            <address className="text-lg ml-[10px]">
              {number
                ? number
                : localStorage.getItem("number")
                ? localStorage.getItem("number")
                : null}{" "}
            </address>
          </div>
          <div className="mt-[34px]  ">
            {localStorage.getItem("bio") || bio ? (
              <h4 className="text-mediumRed text-[18px] 	font-bold ">
                ჩემ შესახებ
              </h4>
            ) : null}
            <p className="mt-[15px] break-words">
              {bio
                ? bio
                : localStorage.getItem("bio")
                ? localStorage.getItem("bio")
                : null}{" "}
            </p>
          </div>
        </div>
        <div className="mt-12 ml-4">
          {localStorage.getItem("files") && (
            <img
              className="rounded-full w-[250px] h-[250px] "
              src={
                files
                  ? files
                  : localStorage.getItem("files")
                  ? localStorage.getItem("files")
                  : null
              }
              alt="your image"
            />
          )}
        </div>
      </div>
      {localStorage.getItem("name") ||
      localStorage.getItem("last_name") ||
      localStorage.getItem("email") ||
      localStorage.getItem("files") ||
      localStorage.getItem("bio") ||
      localStorage.getItem("number") ? (
        <hr className="w-full h-[1px] bg-lightGray "></hr>
      ) : null}
      <WorkHistory
        positionInput={positionInput}
        employerInput={employerInput}
        startNumberInput={startNumberInput}
        endNumberInput={endNumberInput}
        descriptionInput={descriptionInput}
      />
      <img className="absolute bottom-[20px]" src={logo} alt="Logo" />
    </div>
  );
}

export default Profile;
