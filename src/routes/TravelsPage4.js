import React from "react";

import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";

import TravelsPage4Data from "./TravelsPage4Data";



const TravelsPage4 = () => {
  return (
    <>
    {TravelsPage4Data.map((props) => (
        <ImageOnlySection img1={props.img2_1} img2={props.img2_2} />
      ))}

    </>
  );
};

export default TravelsPage4;
