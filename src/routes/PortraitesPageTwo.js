import React from "react";

import PortraitesPage2 from "../components/PortraitesPage2/PortraitesPage2";
import PortraitesPage2sect2 from "../components/PortraitesPage2/PortraitesPage2sect2";
import PortraitesPage2sect3 from "../components/PortraitesPage2/PortraitesPage2sect3"

import img1 from "../assets/img/portfolio-one/MSR08368.png";
import img2 from "../assets/img/portfolio-one/MSR08099.png";

import img6 from "../assets/img/portfolio-one/MSR08170.png";
import img7 from "../assets/img/portfolio-one/MSR08309.png";
import img8 from "../assets/img/portfolio-one/MSR08348 1.png";

const PortraitesPageTwo = () => {
  return (
    <>
      
      <PortraitesPage2 />
      <PortraitesPage2sect2 img={img1} />
      <PortraitesPage2sect2 img={img2} />
      <PortraitesPage2sect3 />
      <PortraitesPage2sect2 img={img6} />
      <PortraitesPage2sect2 img={img7} />
      <PortraitesPage2sect2 img={img8} />
    </>
  );
};

export default PortraitesPageTwo;
