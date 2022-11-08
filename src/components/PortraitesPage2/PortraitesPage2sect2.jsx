import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";



import './PortraitesPage2.css'

class PortraitesPage2sect2 extends Component {
  render() {
  return (
    <section className="pb-5">
        <Container>
          <Row>
            <Col >
              <div className="port-two-img pt_6 about__img">
                <img src={this.props.img} alt="#" className=" img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  )
}
}

export default PortraitesPage2sect2