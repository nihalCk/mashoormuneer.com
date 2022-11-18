import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { motion } from 'framer-motion';

import { transition1 } from "../../transitions";
import "./PotratesTravelStreet.css";

import { Link } from "react-router-dom";
// import Arrow from "../../assets/img/buttons/arrow_button.png";
const myfunction = () => {
  window.scroll({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
};

class PotratesTravelStreet extends Component {
  render() {
    
    return (
      <section className="Port_section_bg">
        <Container>
          <Row>
            <Col lg={6}>
            <motion.div
              initial={{ opacity: -5, x: "-80%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-80%" }}
              transition={transition1} class="portfolio-content portfolio-section1">
                <h1>{this.props.heading}</h1>
                <p>
                  {this.props.text}
                  <br />
                  <br />
                  <br />
                  <Link className="show_button" to={this.props.path} onClick={myfunction}>
                    {this.props.sub} 
                  </Link>
                </p>
                </motion.div>
            </Col>
            <Col lg={6}>
              <Link to={this.props.path} className="pointer" onClick={myfunction}>
              <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1} className="portfolio-img port-2  pt_6 ">
                  <img 
                  
                  src={this.props.img} alt="#" 
                  className="img-fluid" />
                </motion.div>

                {/* <div className="portfolio__arrow">
                  <img src={Arrow} alt="fa" />
                </div> */}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PotratesTravelStreet;
