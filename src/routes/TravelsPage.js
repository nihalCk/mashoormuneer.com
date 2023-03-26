import React from "react";

import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";
import TravelsPageData from "./TravelsPageData";


const TravelsPage = () => {
  return (
    <>
     {TravelsPageData.map((props) => (
        <ImageOnlySection img1={props.img1_1} img2={props.img1_2} />
      ))}
    </>
  );
};

export default TravelsPage;
