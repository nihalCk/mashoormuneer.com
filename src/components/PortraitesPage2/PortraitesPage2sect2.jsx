import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";


import { motion } from "framer-motion";
import { transition1 } from "../../transitions";


import './PortraitesPage2.css'

class PortraitesPage2sect2 extends Component {
  render() {
  return (
    <section className="pb-5">
        <Container>
          <Row>
            <Col >
            <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1} className="port-two-img pt_6 about__img">
                <img src={this.props.img} alt="#" className=" img-fluid" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
  )
}
}

export default PortraitesPage2sect2