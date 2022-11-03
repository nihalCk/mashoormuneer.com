import "./AboutPage.css";

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

import About1 from "../../assets/img/about/Myles Loftin photography 1.png";

class about extends Component {
  render() {
    return (
      <section className="section-extra">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="about-img pt_6 about__img">
                <img src={About1} alt="#" className=" img-fluid" />
              </div>
            </Col>
            <Col lg={5}>
              <div className="about-content ">
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
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default about;
