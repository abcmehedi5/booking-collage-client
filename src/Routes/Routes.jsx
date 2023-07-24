import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission/Admission";
import College_Details from "../Pages/Shared/College/College_Details";
import College from "../Pages/College/College";
import My_Collage from "../Pages/My_Collage/My_Collage";
import Admission_Form from "../Pages/Admission/Admission_Form";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Profile from "../Pages/Profile/Profile";
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
        element: <PrivateRouter><College_Details /></PrivateRouter>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admission-form/:collegeId",
        element: <PrivateRouter><Admission_Form></Admission_Form></PrivateRouter>,
      },
      {
        path: "/collage",
        element: <College></College>,
      },
      {
        path: "/my-college",
        element: <PrivateRouter><My_Collage></My_Collage></PrivateRouter>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element:<PrivateRouter> <Profile></Profile></PrivateRouter>,
      },
    ],
  },
]);

export default router;
