import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission/Admission";
import College_Details from "../Pages/Shared/College/College_Details";
import College from "../Pages/College/College";
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
      {
        path: "/collage",
        element: <College></College>,
      },
    ],
  },
]);

export default router;
