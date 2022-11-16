import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Head1 from "../../assets/img/headshot page/MSR08046.png";

import "./PortraitesPage2.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

const PortraitesPage = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <motion.div
              initial={{ opacity: -5, x: "-80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-80%" }}
              transition={transition1}
              className="motion-div"
            >
              <Col lg={3}>
                <div className="portfolio-img pt_6">
                  <img src={Head1} alt="#" className="img-fluid" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="portfolio-img pt_6">
                  <img src={Head1} alt="#" className="img-fluid" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="portfolio-img pt_6">
                  <img src={Head1} alt="#" className="img-fluid" />
                </div>
              </Col>
              <Col lg={3}>
                <div className="portfolio-img pt_6">
                  <img src={Head1} alt="#" className="img-fluid" />
                </div>
              </Col>
            </motion.div>
          </Row>
          <Row>
            <Col>
            <motion.div
              initial={{ opacity: -5, y: "80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "80%" }}
              transition={transition1} className="portfolio-one-content">
                <h1>;and Snowhite with Jawline.</h1>
                <p>
                  At amet, volutpat laoreet morbi arcu eu. Quam augue maecenas
                  tristique dolor tempor nulla a, <br /> vestibulum arcu. Mi dui
                  orci orci m
                </p>
                </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PortraitesPage;
