import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import College_Details from "../Pages/Home/Collage/College_Details";
import Admission from "../Pages/Admission/Admission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/college/:collageId",
        element: <College_Details />,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
    ],
  },
]);

export default router;
