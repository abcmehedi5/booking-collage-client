import React, { useEffect, useState } from "react";
import Collage_Card from "./College_Card";

const Collage = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/collage")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {colleges.map((college, index) => (
        <Collage_Card key={index} college={college} />
      ))}
    </div>
  );
};

export default Collage;
