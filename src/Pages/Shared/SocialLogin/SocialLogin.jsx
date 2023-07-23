import React, { useContext } from "react";
import { FaGofore } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import useToast from "../../../Hooks/useToast";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSingin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handlegoogleSingin = () => {
    googleSingin()
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        useToast("success", "account create successfull");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={() => handlegoogleSingin()}
        className="btn btn-active btn-ghost w-full"
      >
        <FaGofore size={26} /> sign in with google
      </button>
    </div>
  );
};

export default SocialLogin;
