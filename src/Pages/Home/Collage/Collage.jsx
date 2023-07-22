import React from "react";
import Collage_Card from "./College_Card";
import useCollege from "../../../Hooks/useCollage";

const Collage = () => {
  const [colleges] = useCollege();
  return (
    <div className="px-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 mt-4">
        Collage
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
        {colleges.map((college, index) => (
          <Collage_Card key={index} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Collage;
