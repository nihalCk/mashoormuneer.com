import React from "react";

import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";
import TravelsPage2Data from "./TravelsPage2Data";



const TravelsPage2 = () => {
  return (
    <>
      
      {TravelsPage2Data.map((props) => (
        <ImageOnlySection img1={props.img2_1} img2={props.img2_2} />
      ))}
    </>
  );
};

export default TravelsPage2;
