import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const My_Collage = () => {
  const { user } = useContext(AuthContext);
  const [admissions, setAdmissions] = useState([]);
  const [feedback, setFeedback] = useState({});
  console.log(feedback);
  useEffect(() => {
    fetch(`http://localhost:5000/admission?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmissions(data));
  }, []);

  const handleChnage = (e) => {
    const newfeddback = { ...feedback };
    newfeddback[e.target.name] = e.target.value;
    setFeedback(newfeddback);
  };

  return (
    <div className=" bg-gray-100">
      <h2 className="text-2xl text-center  py-6 "> My admission college </h2>
      <div className="flex items-center justify-center px-6">
        {admissions.length <= 0 ? (
          <h3 className="text-3xl text-red-500 mb-10">You have no admission</h3>
        ) : (
          <div className=" w-full">
            {admissions.map((admission) => (
              <div
                key={admission._id}
                className="bg-white p-4 rounded-lg shadow-md mt-4"
              >
                <div className="flex gap-4">
                  <img
                    className="w-[160px] h-[130px] rounded-xl"
                    src={admission.collegeImage}
                  />
                  <div>
                    <Link to={`/college/${admission.collegeId}`}>
                      <h2 className="text-xl font-bold mb-2 link-hover link-primary">
                        {admission.college_name}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4">{admission.subject}</p>
                    <div className="flex">
                      <input
                        onChange={handleChnage}
                        className="w-full bg-slate-100 p-2 rounded-sm"
                        type="textarea"
                        name="feedback"
                        placeholder="Enter your feedback..."
                      />
                      <button className="btn mx-2">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default My_Collage;
