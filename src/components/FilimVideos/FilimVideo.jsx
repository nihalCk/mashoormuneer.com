import React, { Component } from "react";
import "./FilimVideo.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

import { Container, Row, Col } from "react-bootstrap";

class HomeVideo extends Component {
  render() {
    return (
      <motion.section
        initial={{ opacity: -5, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1}>
        <Container >
          <Row>
            <Col lg={4}>
              <div className="main_sect">
              <video
                  src={this.props.video1}
                  title="YouTube video"
                  muted
                  controls
                  allowfullscreen
                ></video>
              </div>
            </Col>
            <Col lg={4}>
              <div className="main_sect">
              <video
                  src={this.props.video2}
                  title="YouTube video"
                  controls
                  muted
                  allowfullscreen
                ></video>
              </div>
            </Col>
            <Col lg={4}>
              <div className="main_sect">
              <video
                  src={this.props.video3}
                  title="YouTube video"
                  muted
                  controls
                  allowfullscreen
                ></video>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    );
  };
}
export default HomeVideo;
