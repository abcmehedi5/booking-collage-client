import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission/Admission";
import College_Details from "../Pages/Shared/College/College_Details";
import College from "../Pages/College/College";
import My_Collage from "../Pages/My_Collage/My_Collage";
import Admission_Form from "../Pages/Admission/Admission_Form";
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
        path: "/admission-form/:collegeId",
        element: <Admission_Form></Admission_Form>,
      },
      {
        path: "/collage",
        element: <College></College>,
      },
      {
        path: "/my-college",
        element: <My_Collage></My_Collage>,
      },
    ],
  },
]);

export default router;
