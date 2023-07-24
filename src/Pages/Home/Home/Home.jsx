import React from "react";
import Research from "../Research/Research";
import Review from "../Review/Review";
import College_Page from "../../Shared/College/College_Page";
import Cover from "../Cover/Cover";
import Image_Gallery from "../../Image_Gallery/Image_Gallery";
import ContactInfo from "../ContactInfo/ContactInfo";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <College_Page title="College"></College_Page>
      <Research></Research>
      <Review></Review>
      <Image_Gallery></Image_Gallery>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default Home;
