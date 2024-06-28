import React from "react";
import mail from "/images/email.svg";
import telphone from "/images/phone.svg";
import logo from "/images/LOGO-12.png";
function Profile() {
  return (
    <div className="ml-[80px]  border-b   border-lightGray relative min-w-[622px] ">
      <div className="flex  ">
        <div className="w-[400px] mt-[68px] ">
          <h1 className="text-mediumRed text-4xl font-bold flex 	">
            {localStorage.getItem("name")}&nbsp;
            {localStorage.getItem("lastName")}
          </h1>
          <div className="flex mt-[17px]">
            {localStorage.getItem("email") && (
              <img src={mail} alt="email icon" />
            )}
            <address className="text-lg ml-[10px]	">
              {localStorage.getItem("email")}
            </address>
          </div>
          <div className="flex mt-[10px]">
            {localStorage.getItem("phone") && (
              <img src={telphone} alt="phone icon" />
            )}
            <address className="text-lg ml-[10px]">
              {localStorage.getItem("phone")}
            </address>
          </div>
          <div className="mt-[34px]  ">
            {localStorage.getItem("aboutme") && (
              <h4 className="text-mediumRed text-[18px] 	font-bold ">
                ჩემ შესახებ
              </h4>
            )}
            <p className="mt-[15px] break-words">
              {localStorage.getItem("aboutme")}
            </p>
          </div>
        </div>
        <div className="mt-12 ml-4">
          {localStorage.getItem("files") && (
            <img
              className="rounded-full w-[250px] h-[250px] "
              src={localStorage.getItem("files") || ""}
              alt="your image"
            />
          )}
        </div>
      </div>
      {localStorage.getItem("name") ||
      localStorage.getItem("lastName") ||
      localStorage.getItem("email") ||
      localStorage.getItem("files") ||
      localStorage.getItem("aboutme") ||
      localStorage.getItem("phone") ? (
        <hr className="w-full h-[1px] bg-lightGray "></hr>
      ) : null}
      <img className="absolute bottom-[20px]" src={logo} alt="Logo" />
    </div>
  );
}

export default Profile;
