import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useCollegeById = () => {
  const { collegeId } = useParams();
  const [college, setCollege] = useState({});
  useEffect(() => {
    fetch("https://college-booking-server-abcmehedi5.vercel.app/admission-college/" + collegeId)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);

  return [college];
};

export default useCollegeById;
