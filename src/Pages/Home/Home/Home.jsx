import React from "react";
import Research from "../Research/Research";
import Review from "../Review/Review";
import College_Page from "../../Shared/College/College_Page";
import Cover from "../Cover/Cover";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <College_Page title="College"></College_Page>
      <Research></Research>
      <Review></Review>
    </div>
  );
};

export default Home;
