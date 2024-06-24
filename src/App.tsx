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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
