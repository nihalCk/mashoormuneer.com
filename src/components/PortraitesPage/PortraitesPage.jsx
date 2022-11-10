import "./PortraitesPage.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head1 from "../../assets/img/headshot page/MSR08046.png";
import Head2 from "../../assets/img/headshot page/9EFBC5D6-DAFC-4FF9-81EC-AADAB41A78F3 2.png";
import Head3 from "../../assets/img/headshot page/MSR04286.png";
import Head4 from "../../assets/img/headshot page/MSR04688.png";
import Head5 from "../../assets/img/headshot page/IMG_6997.png";
import Head6 from "../../assets/img/headshot page/IMG_6913.png";

// import Arrow from "../../assets/img/buttons/arrow_button.png";
import { Link } from "react-router-dom";

const PortraitesPage = () => {
  return (
    <>
      {/* <section className="gt">
        <Container className="text_field">
          <Row>
            <Col>
              <div className="text_field-sect">
                <h1>
                  Headshots, <br /> Currated - 1892
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="text_img_para-sect">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="head_div">
                <h1>
                  ;and Snowhite <br /> with Jawline.
                </h1>
              </div>
            </Col>

            <Col lg={4}>
              <Link to="/portraitesPageTwo">
                <div className="portfolio-img pt_6">
                  <img src={Head1} alt="#" className="img-fluid" />
                </div>
              </Link>
            </Col>
            <Col lg={4} className="para-div">
              <p>
                TAt amet, volutpat laoreet morbi arcu eu. Quam augue maecenas
                tristique dolor tempor nulla a, vestibulum arcu. Mi dui orci
                orci mattis quis tempus. Magna pretium ac lacus felis at aliquet
                interdum. Egestas fringilla ultrices cras metus aliquam dolor
                enim sodales risus.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Link className="show_button" to="/portraitesPageTwo">
                  Click here +
                </Link>
              </p>
              {/* <Link to="/portraitesPageTwo">
                <div className="headshot__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="text_img-third">
        <Container className="third-container">
          <Row>
          
            <Col lg={6}>
            <Link  to="/portraitesPageThree">
              <div className="portfolio-img pt_6">
                <img src={Head2} alt="#" className="img-fluid" />
              </div>
              </Link>
            </Col>
            
            <Col lg={6}>
              <div className="head_div">
                <h1>
                  ;and Snowhite <br /> with Jawline.
                  <br />
                  <br />
                  <br />
                  <Link className="show_button" to="/portraitesPageThree">
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
      <section className="headshot-fourth-section">
        <Container className="position-relative">
          <Row>
            <Col lg={6}>
              <Link to="/">
                <div className="portfolio-img pt_6">
                  <img src={Head3} alt="#" className="img-fluid" />
                </div>
              </Link>
            </Col>
            <Col lg={6} className="para-div">
              <h1>
                ;and Snowhite <br /> with Jawline.
              </h1>
              <br />
              <br />
              <br />
              <Link className="show_button" to="/portraitesPageTwo">
                Click here +
              </Link>
              {/* <Link to="/">
                <div className="fourth__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={6}>
              <h1>
                ;and Snowhite <br /> with Jawline.
              </h1>
              <p>
                TAt amet, volutpat laoreet morbi arcu eu. Quam augue maecenas
                tristique dolor tempor nulla a, vestibulum arcu. Mi dui orci
                orci mattis quis tempus. Magna pretium ac lacus felis at aliquet
                interdum. Egestas fringilla ultrices cras metus aliquam dolor
                enim sodales risus.
                <br />
                <br />
                <br />
                <Link className="show_button" to="/portraitesPageTwo">
                  Click here +
                </Link>
              </p>
            </Col>

            <Col lg={6}>
              <div className="portfolio-img pt_6">
                <img src={Head4} alt="#" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
              <Link className="show_button" to="/portraitesPageTwo">
                Click here +
              </Link>
              {/* <Link to="/">
                <div className="fifth__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PortraitesPage;
