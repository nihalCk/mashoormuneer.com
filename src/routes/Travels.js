import React from "react";
import NavbarInner from "../components/NavbarInner/NavbarInner";
import TravelsPage from "../components/Travels/TravelsPage";
import TravelsData from "./TravelsData";

const Travels = () => {
  return (
    <>
      <NavbarInner />
      {TravelsData.map((props) => (
        <TravelsPage
          img={props.img}
          path={props.path}
          sub={props.sub}
          heading={props.heading}
          heading2={props.heading2}
          text={props.text}
        />
      ))}
    </>
  );
};

export default Travels;
