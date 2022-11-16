import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Head3 from "../../assets/img/headshot page/MSR04286.png";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";



const PortraitesPage4 = () => {
  return (
    <motion.section
              initial={{ opacity: -5, x: "-80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-80%" }}
              transition={transition1} className="headshot-fourth-section">
      <Container className="position-relative">
        <Row>
          <Col lg={6}>
            
              <div className="portfolio-img pt_6">
                <img src={Head3} alt="#" className="img-fluid" />
              </div>
            
          </Col>
          <Col lg={6} className="para-div">
            <h1>
              ;and Snowhite <br /> with Jawline.
            </h1>
            <br />
            <br />
            <br />
            {/* <Link className="show_button" to="/portraitesPageTwo">
              Click here +
            </Link> */}
            {/* <Link to="/">
                <div className="fourth__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
              </Link> */}
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default PortraitesPage4;
