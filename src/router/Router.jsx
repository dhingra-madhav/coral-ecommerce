import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Accessories from "../pages/Home/Accessories";
import SingleProduct from "../pages/Home/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct  />,
      },
    ],
  },
]);

export default router;
