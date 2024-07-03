import EnterPersonalData from "./components/experience/EnterPersonalData";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateInfo from "./component/PrivateInfo";
import HomePage from "./components/HomePage";
import EducationInputs from "./components/education/EducationInputs";

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
      path: "/educationInfo",
      element: <EducationInputs />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
