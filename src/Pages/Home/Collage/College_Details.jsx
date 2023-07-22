import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const College_Details = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/collage")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const { collageId } = useParams();
  const college = colleges.find((college) => college._id === collageId);
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-6">
        <img
          src={college?.image}
          alt={college?.college_name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-3xl font-semibold text-purple-600 mb-2">
          {college?.college_name}
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Admission Dates: {college?.admission_dates}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">Events</h3>
        <ul className="text-gray-700">
          {college?.events.map((event, index) => (
            <li key={index} className="mb-1">
              {event}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          Research History
        </h3>
        <p className="text-gray-700">{college?.research_history}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-yellow-600 mb-2">Sports</h3>
        <ul className="text-gray-700">
          {college?.sports.map((sport, index) => (
            <li key={index} className="mb-1">
              {sport}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default College_Details;
