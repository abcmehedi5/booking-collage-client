import React from "react";
import { Link } from "react-router-dom";

const Collage_Card = ({ college }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-sm">
      <img
        src={college.image}
        alt={college.college_name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {college.college_name}
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Admission Dates: {college.admission_dates}
      </p>
      <Link
        to={`/college/${college._id}`}
        className="mt-4 block text-center w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Details
      </Link>
    </div>
  );
};

export default Collage_Card;
