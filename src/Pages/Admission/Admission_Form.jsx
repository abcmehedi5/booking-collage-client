import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import useCollegeById from "../../Hooks/useCollegeById";
import { AuthContext } from "../../Providers/AuthProvider";
import useToast from "../../Hooks/useToast";

const Admission_Form = () => {
  const { user } = useContext(AuthContext);
  const [college] = useCollegeById();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data.image[0].type);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(
      `https://api.imgbb.com/1/upload?key=132b873aeba0a9d4de363955fe04a522`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const photoURL = result.data.display_url;

          const saveData = {
            candidateName: data.candidateName,
            dateOfBirth: data.dateOfBirth,
            candidatePhone: data.candidatePhone,
            dateOfBirth: data.dateOfBirth,
            email: user.email,
            address: data.address,
            subject: data.subject,
            image: photoURL,
            college_name: college.college_name,
            collegeImage: college.image,
            collegeId: college._id,
          };
          console.log(saveData);
          fetch("https://college-booking-server-abcmehedi5.vercel.app/admission", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(saveData),
          })
            .then((res) => res.json)
            .then((result) => {
              console.log(result);
              setLoading(false);
              useToast("success", "admission successfull");
            });
        }
      });
  };
  return (
    <div className=" bg-gray-100 p-10">
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-md md:w-1/2"
        >
          <h1 className=" text-center p-2 mb-4 rounde text-2xl">
            Flap the form for admission ( {college.college_name})
          </h1>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">
                Candidate Name
              </label>
              <input
                {...register("candidateName", { required: true })}
                className="input w-full  bg-slate-100 border-gray-400"
                placeholder="Enter candidate name"
              />
              {errors.candidateName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">Subject</label>
              <input
                {...register("subject", { required: true })}
                className="input w-full  bg-slate-100 border-gray-400"
                placeholder="Enter subject"
              />
              {errors.subject && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">
                Candidate Email
              </label>
              <input
                value={user.email}
                disabled
                className="input w-full  bg-slate-100 border-gray-400"
                placeholder="Enter candidate email"
              />
              {errors.candidateEmail && (
                <span className="text-red-500">
                  Please enter a valid email address
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">
                Candidate Phone number
              </label>
              <input
                {...register("candidatePhone", { required: true })}
                className="input w-full  bg-slate-100 border-gray-400"
                placeholder="Enter candidate phone number"
              />
              {errors.candidatePhone && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">Address</label>
              <input
                {...register("address", { required: true })}
                className="input w-full  bg-slate-100 border-gray-400"
                placeholder="Enter address"
              />
              {errors.address && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">
                Date of Birth
              </label>
              <input
                {...register("dateOfBirth", { required: true })}
                type="date"
                className="input w-full  bg-slate-100 border-gray-400"
              />
              {errors.dateOfBirth && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">Image</label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="input w-full  bg-slate-100 border-gray-400 "
                accept="image/*"
              />
              {errors.image && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 w-full hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md"
              >
                Submit{" "}
                {loading && (
                  <span className="loading loading-ring  w-[20px] "></span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission_Form;
