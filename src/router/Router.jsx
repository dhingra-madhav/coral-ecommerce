import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Accessories from "../pages/Accessories/Accessories";
import Toys from "../pages/Toys/Toys";
import Beauty from "../pages/Beauty/Beauty";
import Books from "../pages/Books/Books";
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
        path: "/toys",
        element: <Toys />,
      },
      {
        path: "/beauty",
        element: <Beauty />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct  />,
      },
    ],
  },
]);

export default router;
