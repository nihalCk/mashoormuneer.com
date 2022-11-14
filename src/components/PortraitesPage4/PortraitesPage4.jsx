import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Head3 from "../../assets/img/headshot page/MSR04286.png";



const PortraitesPage4 = () => {
  return (
    <section className="headshot-fourth-section">
      <Container className="position-relative">
        <Row>
          <Col lg={6}>
            
              <div className="portfolio-img pt_6">
                <img src={Head3} alt="#" className="img-fluid" />
              </div>
            
          </Col>
          <Col lg={6} className="para-div">
            <h1>
              ;and Snowhite <br /> with Jawline.
            </h1>
            <br />
            <br />
            <br />
            {/* <Link className="show_button" to="/portraitesPageTwo">
              Click here +
            </Link> */}
            {/* <Link to="/">
                <div className="fourth__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
              </Link> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortraitesPage4;
