import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Head2 from "../../assets/img/headshot page/9EFBC5D6-DAFC-4FF9-81EC-AADAB41A78F3 2.png";



import { Link } from "react-router-dom";

import "./PortraitesPage3.css"

const PortraitesPage3 = () => {
  return (
    <section className="text_img-third">
      <Container className="third-container">
        <Row>
          <Col lg={6}>
            <div className="portfolio-img pt_6">
              <img src={Head2} alt="#" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="head_div">
              <h1>
                ;and Snowhite <br /> with Jawline.
                <br />
                <br />
                <br />
                <Link className="show_button" to="/portraitesPageTwo">
                  Click here +
                </Link>
              </h1>
              <Link to="/">
                {/* <div className="third__arrow">
                    <img src={Arrow} alt="fa" />
                  </div> */}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortraitesPage3;
