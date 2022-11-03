import React from "react";
import NavbarInner from "../components/NavbarInner/NavbarInner";
import PortfolioPage from "../components/Portfolio/PortfolioPage";

const Portfolio = () => {
  return (
    <>
      <NavbarInner />
      <PortfolioPage heading="Portfolio"
        text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
                sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
                blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
                eros, faucibus vulputate non felis tempus. Convallis auctor duis
                vitae commodo mauris risus. Fames mattis blandit rhoncus
                suspendisse eu nisl." />

    </>
  );
};

export default Portfolio;
