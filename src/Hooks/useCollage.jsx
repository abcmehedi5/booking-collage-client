import { useEffect, useState } from "react";
const useCollege = (search) => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/collage?search=${search}`)
    // fetch(`http://localhost:5000/collage`)
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setColleges([]);
      });
  }, [search]);

  return [colleges];
};
export default useCollege;
