import { useState } from "react";
import BackButton from "./buttons/BackButtonArrow";
import PrivateInfo from "./component/PrivateInfo";
import NextButton from "./buttons/NextButton";

function App() {
  return (
    <div>
      <BackButton />
      <PrivateInfo />
      <NextButton />
    </div>
  );
}

export default App;
