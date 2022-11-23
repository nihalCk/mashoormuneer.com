import React from "react";
import NavbarInner from "../components/NavbarInner/NavbarInner";
import StreetPage from "../components/Street/StreetPage";
import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";
import StreetPageHead from "../components/Street/StreetPageHead";

import img1 from "../assets/img/Street/000.png";
import img2 from "../assets/img/Street/001.png";
import img3 from "../assets/img/Street/002.png";
import img4 from "../assets/img/Street/003.png";
import img5 from "../assets/img/Street/004.png";
import img6 from "../assets/img/Street/005.png";
import img7 from "../assets/img/Street/006.png";
import img8 from "../assets/img/Street/007.png";
import img9 from "../assets/img/Street/008.png";
import img10 from "../assets/img/Street/009.png";
import img11 from "../assets/img/Street/0010.png";
import img12 from "../assets/img/Street/0011.png";
import img13 from "../assets/img/Street/0012.png";
import img14 from "../assets/img/Street/0013.png";
import img15 from "../assets/img/Street/0014.png";


const Street = () => {
  return (
    <>
      <NavbarInner />
      <StreetPage
        heading="Eyes: Out of the street"
        st={{ paddingBottom: "0" }}
      />
      <StreetPageHead
        img={img1}
        st={{ paddingTop: "0" }}
        title="At amet, volutpat laoreet morbi arcu eu. Quam augue maecenas tristique dolor tempor nulla a, vestibulum arcu. Mi dui orci orci mattis quis tempus. Magna pretium ac lacus felis at aliquet interdum. Egestas fringilla ultrices cras metus aliquam dolor enim sodales risus."
        author="Redsa"
      />
      <ImageOnlySection img1={img2} img2={img3}/>
      <ImageOnlySection img1={img4}  img2={img5} />
      <ImageOnlySection img1={img6}  img2={img7} />
      <ImageOnlySection img1={img8}  img2={img9}/>
      <ImageOnlySection img1={img10}  img2={img11}/>
      <ImageOnlySection img1={img12}  img2={img13}/>
      <ImageOnlySection img1={img14}  img2={img15}/>
     

    </>
  );
};

export default Street;
