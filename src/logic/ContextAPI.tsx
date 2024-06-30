import React, { createContext, useState } from "react";
import App from "../App";

type TMainInfo = {
  mainInfo: Inputs;
  setMainInfo: React.Dispatch<React.SetStateAction<Inputs>>;
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

  return (
    <>
      <GlobalAPI.Provider value={{ mainInfo, setMainInfo }}>
        <App />
      </GlobalAPI.Provider>
    </>
  );
}

export default ContextAPI;
