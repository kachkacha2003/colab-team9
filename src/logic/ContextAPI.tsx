import React, { createContext, useState } from "react";
import App from "../App";
type Texp = {
  position: string;
  employer: string;
  startNumber: string;
  endNumber: string;
  description: string;
};
type TMainInfo = {
  mainInfo: Inputs;
  setMainInfo: React.Dispatch<React.SetStateAction<Inputs>>;
  experience: Texp;
  setExperience: React.Dispatch<React.SetStateAction<Texp>>;
};

export const GlobalAPI = createContext<TMainInfo>({
  mainInfo: {
    name: "",
    last_name: "",
    files: "",
    bio: "",
    email: "",
    number: "",
  },
  setMainInfo: () => {},
  experience: {
    position: "",
    employer: "",
    startNumber: "",
    endNumber: "",
    description: "",
  },
  setExperience: () => {},
});

function ContextAPI() {
  const [mainInfo, setMainInfo] = useState({
    name: "",
    last_name: "",
    files: "",
    bio: "",
    email: "",
    number: "",
  });
  const [experience, setExperience] = useState({
    position: "",
    employer: "",
    startNumber: "",
    endNumber: "",
    description: "",
  });
  console.log(experience);
  return (
    <>
      <GlobalAPI.Provider
        value={{ mainInfo, setMainInfo, experience, setExperience }}
      >
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default ContextAPI;
