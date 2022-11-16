import React, { Component } from "react";
import "./HomeVideo.css";

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
              transition={transition1} className="HomeVideo">
      <Container>
        <Row>
          <Col lg={12} className="">
            <div className="ratio ratio-16x9">
              <iframe
                src={this.props.video}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};
}
export default HomeVideo;
