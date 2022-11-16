import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

import Head5 from "../../assets/img/headshot page/IMG_6997.png";
import Head6 from "../../assets/img/headshot page/IMG_6913.png";


import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

const PortraitesPage6 = () => {
  return (
    <motion.section
    initial={{ opacity: -5, x: "-80%" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-80%" }}
    transition={transition1}>
        <Container className="position-relative">
          <Row>
            <Col lg={6}>
              <div className="portfolio-img pt_6">
                <img src={Head5} alt="#" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6}>
              <h1>
                ;and Snowhite <br /> with Jawline.
              </h1>
              <div className="portfolio-img pt_6">
                <img src={Head6} alt="#" className="img-fluid" />
              </div>
              <br />
              <br />
              <br />
              {/* <Link
                className="show_button"
                to="/portraitesPageTwo"
                onClick={myfunction}
              >
                Click here +
              </Link> */}
              {/* <Link to="/">
                <div className="fifth__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
              </Link> */}
            </Col>
          </Row>
        </Container>
      </motion.section>
  )
}

export default PortraitesPage6