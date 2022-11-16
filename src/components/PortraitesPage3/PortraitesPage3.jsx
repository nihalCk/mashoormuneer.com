import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Head2 from "../../assets/img/headshot page/9EFBC5D6-DAFC-4FF9-81EC-AADAB41A78F3 2.png";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

import { Link } from "react-router-dom";

import "./PortraitesPage3.css";

const PortraitesPage3 = () => {
  return (
    <motion.section
              initial={{ opacity: -5, x: "-80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-80%" }}
              transition={transition1} className="text_img-third">
      <Container className="third-container">
        <Row>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: -5, x: "-80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-80%" }}
              transition={transition1}
              className="portfolio-img pt_6"
            >
              <img src={Head2} alt="#" className="img-fluid" />
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: -5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition1}
              className="head_div"
            >
              <h1>
                ;and Snowhite <br /> with Jawline.
                <br />
                <br />
                <br />
                {/* <Link className="show_button" to="/portraitesPageTwo">
                  Click here +
                </Link> */}
              </h1>
              <Link to="/">
                {/* <div className="third__arrow">
                    <img src={Arrow} alt="fa" />
                  </div> */}
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default PortraitesPage3;
