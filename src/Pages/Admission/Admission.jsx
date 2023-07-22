import React from "react";
import useCollege from "../../Hooks/useCollage";
import { Link } from "react-router-dom";

const college = () => {
  const [colleges] = useCollege();
  return (
    <div className=" bg-gray-100 pb-10">
      <h2 className="text-2xl text-center  py-6 ">Admission</h2>
      <div className="flex items-center justify-center px-6">
        <div className=" w-3/4">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="bg-white p-4 rounded-lg shadow-md mt-4"
            >
              <Link to={`/admission-form/${college._id}`}>
                <h2 className="text-xl font-bold mb-2 link-hover link-primary">
                  {college.college_name}
                </h2>
              </Link>
              <p className="text-gray-600 ">{college.admission_dates}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default college;
