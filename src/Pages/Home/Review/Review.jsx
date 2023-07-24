import React, { useEffect, useState } from "react";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://college-booking-server-abcmehedi5.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-gray-100 py-8">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Feedback </h2>
        {reviews.length === 0 ? (
          <p className="text-gray-600">No reviews available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full overflow-hidden w-12 h-12 mr-4">
                    <img
                      src={review.userAvatar}
                      alt={review.userName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.userName}
                    </h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                    <p className="text-sm text-gray-500 font-bold">{review.college_name}</p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
