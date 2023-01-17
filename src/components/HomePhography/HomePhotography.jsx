import React from "react";
import "./HomePhotography.css";

import { Row, Col, Container } from "react-bootstrap";

import Portfolio1 from "../../assets/img/portfolio/home-section-3-img1.png";
import HomeButton from "../HomeButton/HomeButton";
import { Link } from "react-router-dom";

const HomePhotography = () => {
  return (
    <>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="main__image">
                <h1><Link to="/photography">Photography</Link></h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePhotography;
