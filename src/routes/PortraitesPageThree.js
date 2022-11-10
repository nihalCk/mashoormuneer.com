import React from 'react'
import PortraitesPage3 from "../components/PortraitesPage3/PortraitesPage3";
import NavbarInner from "../components/NavbarInner/NavbarInner";
import PortraitesPage2sect2 from "../components/PortraitesPage2/PortraitesPage2sect2";

import img2 from "../assets/img/portfolio-two/0CEA4F31-B672-47F4-8DB4-9521229160E3.png";
import img3 from "../assets/img/portfolio-two/MSR02150 2.png";
import img4 from "../assets/img/portfolio-two/MSR02188 2.png";



const PortraitesPageThree = () => {
  return (
    <>
      <NavbarInner />
      <PortraitesPage3 />
      <PortraitesPage2sect2 img={img2} />
      <PortraitesPage2sect2 img={img3} />
      <PortraitesPage2sect2 img={img4} />
   
    </>
  )
}

export default PortraitesPageThree