import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMyCollage = () => {
  const { user } = useContext(AuthContext);
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    fetch(`https://college-booking-server-abcmehedi5.vercel.app/admission?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmissions(data));
  }, []);

  return [admissions];
};

export default useMyCollage;
