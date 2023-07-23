import React from "react";
const Cover = () => {
  return (
    <div
      className="hero min-h-[600px]"
      style={{
        backgroundImage:
          "url(https://image.cnbcfm.com/api/v1/image/106033167-1563831239792gettyimages-534819538.jpg?v=1563831307)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-11 text-5xl uppercase font-bold">Welcome to Booking College</h1>
          <p className="mb-5">
          This ultra-short description highlights the website's purpose as a college admission guide and encourages visitors to pursue their dream college through Booking Collage's assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
