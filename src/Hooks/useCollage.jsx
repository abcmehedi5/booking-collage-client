import { useEffect, useState } from "react";
const useCollege = (search) => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch(`https://college-booking-server-abcmehedi5.vercel.app/collage?search=${search}`)
    // fetch(`https://college-booking-server-abcmehedi5.vercel.app/collage`)
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
