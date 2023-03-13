import React from "react";

import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";


import TravelsPage3Data from "./TravelsPage3Data";


const TravelsPage2 = () => {
  return (
    <>
    {TravelsPage3Data.map((props) => (
        <ImageOnlySection img1={props.img2_1} img2={props.img2_2} />
      ))}
    </>
  );
};

export default TravelsPage2;
