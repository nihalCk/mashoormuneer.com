import "./PortfolioPage.css";

import "../../index.css";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Portfolio1 from "../../assets/img/portfolio/MSR04632.png";
import Portfolio2 from "../../assets/img/portfolio/MSR06080.png";
import Portfolio3 from "../../assets/img/portfolio/delhistreet8.png";
import Arrow from "../../assets/img/buttons/arrow_button.png";

class PortfolioPage extends Component {
  render() {
    return (
      <>
        <section className="section-extra">
          <Container>
            <Row>
              <Col md={4}>
                <div className="portfolio-content pt_6">
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
                </div>
              </Col>
              <Col md={6} className="ml_6">
                <div className="port__img-sect">
                  <Row>
                    <Col md={6}>
                      <div className="portfolio-img pt_6">
                        <img src={Portfolio1} alt="#" className="img-fluid" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="portfolio-img pt_6">
                        <img src={Portfolio1} alt="#" className="img-fluid" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="portfolio-img pt_6">
                        <img src={Portfolio1} alt="#" className="img-fluid" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="portfolio-img pt_6">
                        <img src={Portfolio1} alt="#" className="img-fluid" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="Port_section_bg">
          <Container>
            <Row>
              <Col lg={6}>
                <div class="portfolio-content portfolio-section1">
                  <h1>Portaraits</h1>
                  <p>
                    TAt amet, volutpat laoreet morbi arcu eu. Quam augue
                    maecenas tristique dolor tempor nulla a, vestibulum arcu. Mi
                    dui orci orci mattis quis tempus. Magna pretium ac lacus
                    felis at aliquet interdum. Egestas fringilla ultrices cras
                    metus aliquam dolor enim sodales risus.
                    <br />
                    <br />
                    <br />
                    Redsa
                  </p>
                </div>
              </Col>
              <Col lg={6}>
              <Link to="/headshot" className="pointer">
                <div className="portfolio-img port-2  pt_6 ">
                  <img src={Portfolio1} alt="#" className="img-fluid" />
                </div>

                <div className="portfolio__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="Port_section_bg">
          <Container>
            <Row>
              <Col lg={6}>
                <div class="portfolio-content portfolio-section1">
                  <h1>Travels</h1>
                  <p>
                    TAt amet, volutpat laoreet morbi arcu eu. Quam augue
                    maecenas tristique dolor tempor nulla a, vestibulum arcu. Mi
                    dui orci orci mattis quis tempus. Magna pretium ac lacus
                    felis at aliquet interdum. Egestas fringilla ultrices cras
                    metus aliquam dolor enim sodales risus.
                    <br />
                    <br />
                    <br />
                    Redsa
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <Link to="/" className="pointer">
                  <div className="portfolio-img port-2  pt_6 ">
                    <img src={Portfolio2} alt="#" className="img-fluid" />
                  </div>
                  <div className="portfolio__arrow">
                    <img src={Arrow} alt="fa" />
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="Port_section_bg">
          <Container>
            <Row>
              <Col lg={6}>
                <div class="portfolio-content portfolio-section1">
                  <h1>Street</h1>
                  <p>
                    TAt amet, volutpat laoreet morbi arcu eu. Quam augue
                    maecenas tristique dolor tempor nulla a, vestibulum arcu. Mi
                    dui orci orci mattis quis tempus. Magna pretium ac lacus
                    felis at aliquet interdum. Egestas fringilla ultrices cras
                    metus aliquam dolor enim sodales risus.
                    <br />
                    <br />
                    <br />
                    Redsa
                  </p>
                </div>
              </Col>
              <Col lg={6}>
              <Link to="/"  className="pointer">
                <div className="portfolio-img port-2  pt_6 ">
                  <img src={Portfolio3} alt="#" className="img-fluid" />
                </div>
                <div className="portfolio__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default PortfolioPage;
