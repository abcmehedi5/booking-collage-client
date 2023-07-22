import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Admission = () => {
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
            candidateEmail: data.candidateEmail,
            dateOfBirth: data.dateOfBirth,
            candidatePhone: data.candidatePhone,
            dateOfBirth: data.dateOfBirth,
            address: data.address,
            subject: data.subject,
            image: photoURL,
          };
          console.log(saveData);
          fetch("http://localhost:5000/admission", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(saveData),
          })
            .then((res) => res.json)
            .then((result) => {
              setLoading(false);
              alert("data submitted");
            });
        }
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md md:w-1/2"
      >
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
              {...register("candidateEmail", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
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
  );
};

export default Admission;
