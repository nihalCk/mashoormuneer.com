import React from 'react'
import PortraitesPage5 from "../components/PortraitesPage5/PortraitesPage5";
import PortraitesPage2sect2 from "../components/PortraitesPage2/PortraitesPage2sect2";

import img1 from "../assets/img/portfolio-four/MSR04725.png";
import img2 from "../assets/img/portfolio-four/MSR04632.png";
import img3 from "../assets/img/portfolio-four/MSR04732.png";

const PortraitesPageFive = () => {
  return (
    <>
      
      <PortraitesPage5 />
      <PortraitesPage2sect2 img={img1} />
      <PortraitesPage2sect2 img={img2} />
      <PortraitesPage2sect2 img={img3} />

    </>
  )
}

export default PortraitesPageFive