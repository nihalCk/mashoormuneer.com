import "../Contact/ContactPage.css";

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact1 from "../../assets/img/Contact/Marià Casals 1.png";


class ContactPage extends Component {
  render() {
    return (
      <section className="section-extra">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="contact-img pt_6">
                <img src={Contact1} alt="#" className="img-fluid" />
              </div>
            </Col>
            <Col lg={5}>
              <div className="contact-content">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ContactPage;