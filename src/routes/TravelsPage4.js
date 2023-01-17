import React from "react";

import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";


import img1 from "../assets/img/travel-page-4/001.jpg";
import img2 from "../assets/img/travel-page-4/002.jpg";
import img3 from "../assets/img/travel-page-4/003.jpg";
import img4 from "../assets/img/travel-page-4/004.jpg";
import img5 from "../assets/img/travel-page-4/005.jpg";



const TravelsPage4 = () => {
  return (
    <>
      
      <ImageOnlySection img1={img1} img2={img2} />
      <ImageOnlySection img1={img3} img2={img4} />
      <ImageOnlySection img1={img5} img2={img3}/>

    </>
  );
};

export default TravelsPage4;
