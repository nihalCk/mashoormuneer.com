import React from "react";

import img1 from "../assets/img/portfolio-one/MSR08099.png";

// import StreetPage from "../components/Street/StreetPage";
import PortraitesPageData from "./PortraitesPageData";
import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";
import StreetPageHead from "../components/Street/StreetPageHead";

const PortraitesPage = () => {
  return (
    <>


      {/* <StreetPage
        heading="Eyes: Out of the street"
        st={{ paddingBottom: "0" }}
      /> */}

      <StreetPageHead
        img={img1}
        st={{ paddingTop: "0" }}
        title="At amet, volutpat laoreet morbi arcu eu. Quam augue maecenas tristique dolor tempor nulla a, vestibulum arcu. Mi dui orci orci mattis quis tempus. Magna pretium ac lacus felis at aliquet interdum. Egestas fringilla ultrices cras metus aliquam dolor enim sodales risus."
        author="Redsa"
      />


      {PortraitesPageData.map((props) => (
        <ImageOnlySection img1={props.img1_1} img2={props.img1_2} />
      ))}



    </>
  );
};

export default PortraitesPage;
