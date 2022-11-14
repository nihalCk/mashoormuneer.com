import React from 'react'

import { Container, Row, Col } from "react-bootstrap";

import Head5 from "../../assets/img/headshot page/IMG_6997.png";
import Head6 from "../../assets/img/headshot page/IMG_6913.png";

const PortraitesPage6 = () => {
  return (
    <section>
        <Container className="position-relative">
          <Row>
            <Col lg={6}>
              <div className="portfolio-img pt_6">
                <img src={Head5} alt="#" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6}>
              <h1>
                ;and Snowhite <br /> with Jawline.
              </h1>
              <div className="portfolio-img pt_6">
                <img src={Head6} alt="#" className="img-fluid" />
              </div>
              <br />
              <br />
              <br />
              {/* <Link
                className="show_button"
                to="/portraitesPageTwo"
                onClick={myfunction}
              >
                Click here +
              </Link> */}
              {/* <Link to="/">
                <div className="fifth__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>
  )
}

export default PortraitesPage6