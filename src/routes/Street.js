import React from "react";
import ImageOnlySection from "../components/ImageOnlySection/ImageOnlySection";
import StreetPageHead from "../components/Street/StreetPageHead";
import StreetData from "./StreetData";
import img1 from "../assets/img/Street/000.png";

const Street = () => {
  return (
    <>
      <StreetPageHead
        img={img1}
        st={{ paddingTop: "0" }}
        title="At amet, volutpat laoreet morbi arcu eu. Quam augue maecenas tristique dolor tempor nulla a, vestibulum arcu. Mi dui orci orci mattis quis tempus. Magna pretium ac lacus felis at aliquet interdum. Egestas fringilla ultrices cras metus aliquam dolor enim sodales risus."
        author="Redsa"
      />
      {StreetData.map((props, index) => (
        <ImageOnlySection
          key={index}
          img1={props.img1}
          img2={props.img2}
        />
      ))}
    </>
  );
};

export default Street;