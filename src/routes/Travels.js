import React from "react";
import NavbarInner from "../components/NavbarInner/NavbarInner";
import TravelsPage from "../components/Travels/TravelsPage";

import img1 from "../assets/img/Travels Main/Slider home.png";
import img2 from "../assets/img/Travels Main/MSR06830.png";
import img3 from "../assets/img/Travels Main/EE40AD40-4257-4A0E-8065-15A99603F80A.png";
import img4 from "../assets/img/Travels Main/5E505060-3115-4F7F-AC32-4FB7A01689D1.png";

const Travels = () => {
  return (
    <>
      <NavbarInner />
      <TravelsPage
        img={img1}
        path="/travelspage1"
        sub="Show more +"
        heading="Colours of"
        heading2="Dubai"
        text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
            sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
            blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
            eros, faucibus vulputate non felis tempus. Convallis auctor duis
            vitae commodo mauris risus. Fames mattis blandit rhoncus
            suspendisse eu nisl."
      />

      <TravelsPage
        img={img2}
        path="/travelspage2"
        sub="Show more +"
        heading="Egestas sit "
        heading2="non nam dui"
        text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
            sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
            blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
            eros, faucibus vulputate non felis tempus. Convallis auctor duis
            vitae commodo mauris risus. Fames mattis blandit rhoncus
            suspendisse eu nisl."
      />

      <TravelsPage
        img={img3}
        path="/travelspage3"
        sub="Show more +"
        heading="Egestas sit "
        heading2="non nam dui"
        text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
            sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
            blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
            eros, faucibus vulputate non felis tempus. Convallis auctor duis
            vitae commodo mauris risus. Fames mattis blandit rhoncus
            suspendisse eu nisl."
      />

      <TravelsPage
        img={img4}
        path="/travelspage4"
        sub="Show more +"
        heading="Egestas sit "
        heading2="non nam dui"
        text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
            sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
            blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
            eros, faucibus vulputate non felis tempus. Convallis auctor duis
            vitae commodo mauris risus. Fames mattis blandit rhoncus
            suspendisse eu nisl."
      />
    </>
  );
};

export default Travels;
