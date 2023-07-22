import React from "react";
import Research from "../Research/Research";
import Review from "../Review/Review";
import College_Page from "../../Shared/College/College_Page";

const Home = () => {
  return (
    <div>
      <College_Page title="College"></College_Page>
      <Research></Research>
      <Review></Review>
    </div>
  );
};

export default Home;
