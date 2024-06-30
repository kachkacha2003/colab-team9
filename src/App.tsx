import EnterPersonalData from "./components/experience/EnterPersonalData";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateInfo from "./component/PrivateInfo";
import HomePage from "./components/HomePage";
<<<<<<< HEAD
import BackButtonArrow from "./buttons/BackButtonArrow";
=======
import EducationMain from "./components/education/EducationMain";
>>>>>>> main

function App() {
  const router = createBrowserRouter([
    {
      path: "privateInfo",
      element: <PrivateInfo />,
    },
    {
      path: "experienceInfo",
      element: <EnterPersonalData />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
<<<<<<< HEAD
      path: "/educationInfo",
      element: <BackButtonArrow />,
=======
      path: "education",
      element: <EducationMain />,
>>>>>>> main
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
