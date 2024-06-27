import React, { createContext, useState } from "react";
import App from "../App";

type TMain = {
  name: string;
  lastName: string;
  file: string;
  aboutme: string;
  email: string;
  phone: string;
};

type TMainInfo = {
  mainInfo: TMain;
  setMainInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      lastName: string;
      file: string;
      aboutme: string;
      email: string;
      phone: string;
    }>
  >;
};

export const GlobalAPI = createContext<TMainInfo>({
  mainInfo: {
    name: "",
    lastName: "",
    file: "",
    aboutme: "",
    email: "",
    phone: "",
  },
  setMainInfo: () => {},
});

function ContextAPI() {
  const [mainInfo, setMainInfo] = useState({
    name: "",
    lastName: "",
    file: "",
    aboutme: "",
    email: "",
    phone: "",
  });
  return (
    <>
      <GlobalAPI.Provider value={{ mainInfo, setMainInfo }}>
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default ContextAPI;
