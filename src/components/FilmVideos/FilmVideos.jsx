import React, { Component } from "react";
import "./FilimVideo.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

import { Container, Row, Col } from "react-bootstrap";

class FilimVideo extends Component {
  render() {
    return (
      <motion.section
      
        className="Film_main"
        initial={{ opacity: -5, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1}>
        <Container >
          <Row>
            <Col lg={4}>
              <div className="main_sect">
                <iframe src={this.props.video1} title="HOME | Poetic Travel Film | Old Dubai | Dubai" frameborder="0" allow="" allowfullscreen></iframe>
              </div>
            </Col>
            <Col lg={4}>
              <div className="main_sect">
              <iframe src={this.props.video2} title="She captured a life she loved" frameborder="0" allow="" allowfullscreen></iframe>
              </div>
            </Col>
            <Col lg={4}>
              <div className="main_sect">
              <iframe src={this.props.video3} title="Museum of The Future | Shot on Sony A7III | Dubai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    );
  };
}
export default FilimVideo;
