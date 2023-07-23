import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMyCollage = () => {
  const { user } = useContext(AuthContext);
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/admission?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmissions(data));
  }, []);

  return [admissions];
};

export default useMyCollage;
