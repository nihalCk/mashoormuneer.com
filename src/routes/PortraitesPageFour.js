import React from 'react'

import NavbarInner from "../components/NavbarInner/NavbarInner";
import PortraitesPage4 from "../components/PortraitesPage4/PortraitesPage4";
import PortraitesPage2sect2 from "../components/PortraitesPage2/PortraitesPage2sect2";

import img1 from "../assets/img/portfolio-three/MSR04111 1.png";
import img2 from "../assets/img/portfolio-three/MSR04131.png";
import img3 from "../assets/img/portfolio-three/MSR04156.png";
import img4 from "../assets/img/portfolio-three/MSR04170.png";
import img5 from "../assets/img/portfolio-three/MSR04284.png";
import img6 from "../assets/img/portfolio-three/MSR04286.png";
import img7 from "../assets/img/portfolio-three/MSR04335.png";
import img8 from "../assets/img/portfolio-three/MSR04356.png";




const PortraitesPageFour = () => {
  return (
    <>
    <NavbarInner />
    <PortraitesPage4 />
    <PortraitesPage2sect2 img={img1} />
    <PortraitesPage2sect2 img={img2} />
    <PortraitesPage2sect2 img={img3} />
    <PortraitesPage2sect2 img={img4} />
    <PortraitesPage2sect2 img={img5} />
    <PortraitesPage2sect2 img={img6} />
    <PortraitesPage2sect2 img={img7} />
    <PortraitesPage2sect2 img={img8} />
    </>
  )
}

export default PortraitesPageFour