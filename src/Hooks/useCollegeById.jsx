import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useCollegeById = () => {
  const { collegeId } = useParams();
  const [college, setCollege] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/admission-college/" + collegeId)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, []);

  return [college];
};

export default useCollegeById;
