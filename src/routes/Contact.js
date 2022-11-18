import React from "react";
import NavbarInner from "../components/NavbarInner/NavbarInner";
import AboutContact from "../components/AboutContact/AboutContact";
import Contact1 from "../assets/img/Contact/Marià Casals 1.png";

import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <>
      <NavbarInner />
      <motion.div
        initial={{ opacity: 0, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1}
      >
        <AboutContact
          img={Contact1}
          heading="Contact"
          text="Tempus, aliquam etiam ut adipiscing nec nibh. Nisi, enim arcu
              sit vulputate. Neque, volutpat dolor, vitae leo aenean in. Id
              blandit quis at etiam tortor, mattis leo. Ridiculus dolor congue
              eros, faucibus vulputate non felis tempus. Convallis auctor duis
              vitae commodo mauris risus. Fames mattis blandit rhoncus
              suspendisse eu nisl."
          st={{ color: "#212529" }}
          align={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        />
      </motion.div>
    </>
  );
};

export default Contact;
