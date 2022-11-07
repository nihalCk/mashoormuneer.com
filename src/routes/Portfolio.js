import React from "react";
import NavbarInner from "../components/NavbarInner/NavbarInner";
import PhotographySection1 from "../components/Photography/PhotographySection1";
import PhotographySection2 from "../components/Photography/PhotographySection2";
import img1 from "../assets/img/portfolio/img1.png";
import img2 from "../assets/img/portfolio/img2.png";
import img3 from "../assets/img/portfolio/img3.png";

const Portfolio = () => {
  return (
    <>
      <NavbarInner />
      <PhotographySection1
        heading="Portfolio"
        text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
                sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
                blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
                eros, faucibus vulputate non felis tempus. Convallis auctor duis
                vitae commodo mauris risus. Fames mattis blandit rhoncus
                suspendisse eu nisl."
      />
      <PhotographySection2
        img= {img1}
        path="/Contact"
        sub="Show more +"
        heading="Portraites"
        text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
              sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
              blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
              eros, faucibus vulputate non felis tempus. Convallis auctor duis
              vitae commodo mauris risus. Fames mattis blandit rhoncus
              suspendisse eu nisl."
      />
      <PhotographySection2
        img= {img2}
        path="/Contact"
        sub="Show more +"
        heading="Travels"
        text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
              sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
              blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
              eros, faucibus vulputate non felis tempus. Convallis auctor duis
              vitae commodo mauris risus. Fames mattis blandit rhoncus
              suspendisse eu nisl."
      />
      <PhotographySection2
        img= {img3}
        path="/Contact"
        sub="Show more +"
        heading="Street"
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

export default Portfolio;
