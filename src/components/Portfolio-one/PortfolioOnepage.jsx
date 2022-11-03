import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Head1 from "../../assets/img/headshot page/MSR08046.png";

import "./PortfolioOnepage.css";

const PortfolioOnepage = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={3}>
              <div className="portfolio-img pt_6">
                <img src={Head1} alt="#" className="img-fluid" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="portfolio-img pt_6">
                <img src={Head1} alt="#" className="img-fluid" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="portfolio-img pt_6">
                <img src={Head1} alt="#" className="img-fluid" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="portfolio-img pt_6">
                <img src={Head1} alt="#" className="img-fluid" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="portfolio-one-content">
                <h1>;and Snowhite with Jawline.</h1>
                <p>
                  At amet, volutpat laoreet morbi arcu eu. Quam augue maecenas
                  tristique dolor tempor nulla a, <br /> vestibulum arcu. Mi dui
                  orci orci m
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PortfolioOnepage;
