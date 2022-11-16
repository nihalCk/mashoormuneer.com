import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import img1 from "../../assets/img/portfolio-one/home-section-3-img2.png";
import img2 from "../../assets/img/portfolio-one/home-section-3-img3.png";
import img3 from "../../assets/img/portfolio-one/home-section-3-img4.png";

import { motion } from "framer-motion";

import { transition1 } from "../../transitions";

const PortraitesPage2sect3 = () => {
  return (
    <motion.section
              initial={{ opacity: -5, x: "-80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-80%" }}
              transition={transition1} className="pt-0">
      <Container>
        <Row>
          <Col lg={4} className="port-two-img pt_6 about__img">
            <img src={img2} alt="#" className=" img-fluid" />
          </Col>
          <Col lg={4} className="port-two-img pt_6 about__img">
            <img src={img1} alt="#" className=" img-fluid" />
          </Col>
          <Col lg={4} className="port-two-img pt_6 about__img">
            <img src={img3} alt="#" className=" img-fluid" />
          </Col>
        </Row>
      </Container>
      </motion.section>
  );
};

export default PortraitesPage2sect3;
