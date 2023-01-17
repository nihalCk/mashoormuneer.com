import React from "react";

import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";


import img1 from "../assets/img/travel-page-2/001.jpg";
import img2 from "../assets/img/travel-page-2/002.jpg";
import img3 from "../assets/img/travel-page-2/003.jpg";
import img4 from "../assets/img/travel-page-2/004.jpg";


const TravelsPage2 = () => {
  return (
    <>
      
      <ImageOnlySection img1={img1} img2={img2} />
      <ImageOnlySection img1={img3} img2={img4} />
    </>
  );
};

export default TravelsPage2;
