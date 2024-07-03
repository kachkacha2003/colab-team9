import EnterPersonalData from "./components/experience/EnterPersonalData";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateInfo from "./component/PrivateInfo";
import HomePage from "./components/HomePage";

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
      element: <EnterPersonalData />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
