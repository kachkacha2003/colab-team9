import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Content from "./component/Content";

function App() {
  const router = createBrowserRouter([
    {
      path: "privateInfo",
      element: <Content />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
