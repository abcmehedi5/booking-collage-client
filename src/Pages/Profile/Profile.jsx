import React, { Fragment, useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useMyCollage from "../../Hooks/useMyCollege";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from "@headlessui/react";
import useToast from "../../Hooks/useToast";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);
  const [admissions] = useMyCollage();
  const [singleAdmission, setSingleAdmission] = useState({});
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (admission) => {
    setIsOpen(true);
    setSingleAdmission(admission);
  };

  //   update admission information
  const onSubmit = (data) => {
    fetch("http://localhost:5000/admission/" + singleAdmission._id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        useToast("success", "information update successfull");
        setIsOpen(false);
      });
  };

  return (
    <div className="mb-20 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-center items-center md:h-96 justify-center ">
        <div className="text-center bg-gradient-to-r  from-teal-400 via-fuchsia-200 to-fuchsia-100 h-90 p-20 rounded-lg">
          <img
            className="w-40 h-40 mx-auto rounded-full"
            src={user?.photoURL}
            alt="Profile"
          />
          <h4 className="mt-4 text-3xl">{user?.displayName}</h4>
          <h4 className="mt-1 text-md">{user?.email}</h4>
        </div>

        {/*  right side ---------------------------- */}
        <div className=" overflow-scroll text-center bg-gradient-to-r h-96 from-fuchsia-400 via-fuchsia-200 to-sky-300 h-90  p-14  rounded-lg">
          <div>
            <div className="flex items-center justify-center px-6">
              {admissions.length <= 0 ? (
                <h3 className="text-3xl text-red-500 mb-10">
                  You have no admission
                </h3>
              ) : (
                <div className=" w-full">
                  {admissions.map((admission) => (
                    <div
                      key={admission._id}
                      className="bg-white p-4 rounded-lg shadow-md mt-4"
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <p>
                            <strong>Name:</strong> {admission.candidateName}
                          </p>
                          <p>
                            <strong>Address:</strong> {admission.address}
                          </p>
                        </div>
                        <div>
                          <Link to={`/college/${admission.collegeId}`}>
                            <h2 className="text-xl font-bold mb-2 link-hover link-primary">
                              {admission.college_name}
                            </h2>
                          </Link>
                          <p className="text-gray-600 mb-4">
                            {admission.subject}
                          </p>
                          <button
                            className="btn"
                            onClick={() => {
                              openModal(admission);
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* modal  */}

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Update your information
                      </Dialog.Title>
                      <hr className="mt-3" />
                      <div className="mt-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <label>Candidate Name</label>
                          <input
                            defaultValue={singleAdmission.candidateName}
                            placeholder="candidateName"
                            {...register("candidateName", {
                              required: "candidateName is required",
                            })}
                            className="w-full mt-3 mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <label>Address </label>
                          <input
                            defaultValue={singleAdmission.address}
                            placeholder="address"
                            {...register("address", {
                              required: "address is required",
                            })}
                            className="w-full px-3 mt-3 mb-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />

                          <label>College Name</label>
                          <input
                            defaultValue={singleAdmission.college_name}
                            placeholder="college_name"
                            {...register("college_name", {
                              required: "college_name is required",
                            })}
                            className="w-full px-3 py-2 mt-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />

                          <input className="btn mt-4 w-full" type="submit" />
                        </form>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Colse
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Profile;
