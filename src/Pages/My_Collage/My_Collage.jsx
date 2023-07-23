import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useToast from "../../Hooks/useToast";
import useMyCollage from "../../Hooks/useMyCollege";

const My_Collage = () => {
  const { user } = useContext(AuthContext);
  const [feedback, setFeedback] = useState({});
  const inputRef = useRef(null);
  const [admissions] = useMyCollage();

  const handleChnage = (e) => {
    const newfeddback = { ...feedback };
    newfeddback[e.target.name] = e.target.value;
    setFeedback(newfeddback);
  };

  const handleSend = (admission) => {
    const saveData = {
      comment: feedback.comment,
      userAvatar: user.photoURL,
      userName: user.displayName,
      college_name: admission.college_name,
      date: new Date().toLocaleDateString("en-US"),
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(saveData),
    })
      .then((res) => res.json())
      .then((result) => {
        useToast("success", "feedback send successfull");

        // Clear the input field value after successful submission
        inputRef.current.value = "";
      });
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
                        // onChange={handleChnage}
                        onChange={handleChnage}
                        ref={inputRef}
                        className="w-full bg-slate-100 p-2 rounded-sm"
                        type="textarea"
                        name="comment"
                        placeholder="Enter your feedback..."
                      />
                      <button
                        onClick={() => handleSend(admission)}
                        className="btn mx-2"
                      >
                        Send
                      </button>
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
