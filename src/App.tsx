
import EnterPersonalData from "./components/EnterPersonalData";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateInfo from "./component/PrivateInfo";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
