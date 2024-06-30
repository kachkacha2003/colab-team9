import React from "react";
import { Link } from "react-router-dom";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[url('/images/background-image.png')] bg-cover bg-center bg-no-repeat px-[70px] flex flex-col">
        <div className="border-black border-b pb-6">
          <img className="pt-[25px]" src="/images/LOGO.png" alt="" />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="relative">
            <div className="relative top-[50px] left-[90%]">
              <img src="/images/LOGO-40.png" alt="" />
            </div>

            <Link
              to={"/privateInfo"}
              type="button"
              className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-black text-white h-[60px] flex justify-center items-center  rounded-lg transition duration-300 w-[466px] active:outline-none"
            >
              ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
