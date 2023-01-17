import React from "react";

import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";


import img1 from "../assets/img/travel-page-3/001.jpg";
import img2 from "../assets/img/travel-page-3/002.jpg";
import img3 from "../assets/img/travel-page-3/003.jpg";
import img4 from "../assets/img/travel-page-3/004.jpg";
import img5 from "../assets/img/travel-page-3/005.jpg";
import img6 from "../assets/img/travel-page-3/006.jpg";
import img7 from "../assets/img/travel-page-3/007.jpg";
import img8 from "../assets/img/travel-page-3/008.jpg";


const TravelsPage2 = () => {
  return (
    <>
     
      <ImageOnlySection img1={img1} img2={img2} />
      <ImageOnlySection img1={img3} img2={img4} />
      <ImageOnlySection img1={img5} img2={img6} />
      <ImageOnlySection img1={img7} img2={img8} />
    </>
  );
};

export default TravelsPage2;
