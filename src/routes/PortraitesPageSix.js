import React from "react";

import PortraitesPage6 from "../components/PortraitesPage6/PortraitesPage6";
import PortraitesPage2sect2 from "../components/PortraitesPage2/PortraitesPage2sect2";

import img1 from "../assets/img/portfolio-five/IMG_6929.png";
import img2 from "../assets/img/portfolio-five/IMG_6934.png";
import img3 from "../assets/img/portfolio-five/IMG_6987.png";

const PortraitesPageSix = () => {
  return (
    <>
      
      <PortraitesPage6 />
      <PortraitesPage2sect2 img={img1} />
      <PortraitesPage2sect2 img={img2} />
      <PortraitesPage2sect2 img={img3} />
    </>
  );
};

export default PortraitesPageSix;
