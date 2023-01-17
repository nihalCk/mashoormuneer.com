import React from "react";

import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";


import img1 from "../assets/img/travel-page-1/001.jpg";
import img2 from "../assets/img/travel-page-1/002.jpg";
import img3 from "../assets/img/travel-page-1/003.jpg";
import img4 from "../assets/img/travel-page-1/004.jpg";
import img5 from "../assets/img/travel-page-1/005.jpg";
import img6 from "../assets/img/travel-page-1/006.jpg";
import img7 from "../assets/img/travel-page-1/007.jpg";
import img8 from "../assets/img/travel-page-1/008.jpg";
import img9 from "../assets/img/travel-page-1/009.jpg";
import img10 from "../assets/img/travel-page-1/0010.jpg";
import img11 from "../assets/img/travel-page-1/0011.jpg";
import img12 from "../assets/img/travel-page-1/0012.jpg";

const TravelsPage1 = () => {
  return (
    <>
      
      <ImageOnlySection img1={img1} img2={img2} />
      <ImageOnlySection img1={img3} img2={img4} />
      <ImageOnlySection img1={img5} img2={img6} />
      <ImageOnlySection img1={img7} img2={img8} />
      <ImageOnlySection img1={img9} img2={img10} />
      <ImageOnlySection img1={img11} img2={img12}  />
    </>
  );
};

export default TravelsPage1;
