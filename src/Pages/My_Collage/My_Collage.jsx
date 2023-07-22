import React, { useEffect, useState } from "react";

const My_Collage = () => {
  const [admissions, setAdmissions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/admission")
      .then((res) => res.json())
      .then((data) => setAdmissions(data));
  }, []);

  return (
    <div className=" bg-gray-100">
      <h2 className="text-2xl text-center  py-6 ">My admission college</h2>
      <div className="flex items-center justify-center px-6">
        <div className=" w-full">
          {admissions.map((admission) => (
            <div
              key={admission.id}
              className="bg-white p-4 rounded-lg shadow-md mt-4"
            >
              <h2 className="text-xl font-bold mb-2">
                {admission.candidateName}
              </h2>
              <p className="text-gray-600 mb-4">{admission.subject}</p>
              <div className="flex">
                <input
                  className="w-full bg-slate-100 p-3 rounded-sm"
                  type="textarea"
                  placeholder="Enter your feedback..."
                />{" "}
                <button className="btn btn-primary mx-2">Send</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default My_Collage;
