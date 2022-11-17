import "./AboutPage.css";

import React, { Component } from "react";

import { Col, Container, Row } from "react-bootstrap";

import About1 from "../../assets/img/about/Myles Loftin photography 1-compressed.jpg";

import { motion } from "framer-motion";

import { transition1 } from "../../transitions";

class about extends Component {
  render() {
    return (
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section section-extra"
      >
        <Container>
          <Row>
            <Col lg={7}>
              <div className="about-img pt_6 about__img">
                <img src={About1} alt="#" className=" img-fluid" />
              </div>
            </Col>
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, y: "-80%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-80%" }}
                transition={transition1}
                className="about-content "
              >
                <h1 className="pre_line letters">
                  <span className="lettersspan">
                    <span className="letter_1" style={{ color: "#212529" }}>
                      {this.props.heading}
                    </span>
                  </span>
                </h1>
                <p className="pre_line letters">
                  <span className="lettersspan">
                    <span className="letter_2" style={{ color: "#212529" }}>
                      {this.props.text}
                    </span>
                  </span>
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    );
  }
}

export default about;
