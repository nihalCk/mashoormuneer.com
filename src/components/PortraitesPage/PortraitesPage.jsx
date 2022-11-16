import "./PortraitesPage.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head1 from "../../assets/img/headshot page/MSR08046.png";
import Head2 from "../../assets/img/headshot page/9EFBC5D6-DAFC-4FF9-81EC-AADAB41A78F3 2.png";
import Head3 from "../../assets/img/headshot page/MSR04286.png";
import Head4 from "../../assets/img/headshot page/MSR04688.png";
import Head5 from "../../assets/img/headshot page/IMG_6997.png";
import Head6 from "../../assets/img/headshot page/IMG_6913.png";
import { motion } from "framer-motion";

import { transition1 } from "../../transitions";

// import Arrow from "../../assets/img/buttons/arrow_button.png";
import { Link } from "react-router-dom";

const myfunction = () => {
  window.scroll({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
};

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
              <motion.div
                initial={{ opacity: -5, x: "-80%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-80%" }}
                transition={transition1}
                className="head_div"
              >
                <h1>
                  ;and Snowhite <br /> with Jawline.
                </h1>
              </motion.div>
            </Col>

            <Col lg={4}>
              <Link to="/portraitesPageTwo" onClick={myfunction}>
                <motion.div
                  initial={{ opacity: -10 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition1}
                  className="portfolio-img pt_6"
                >
                  <img src={Head1} alt="#" className="img-fluid" />
                </motion.div>
              </Link>
            </Col>
            <Col lg={4} className="para-div">
              <motion.div
                initial={{ opacity: -5, y: "-80%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-80%" }}
                transition={transition1}
                className="head_div"
              >
                <p>
                  Tat amet, volutpat laoreet morbi arcu eu. Quam augue maecenas
                  tristique dolor tempor nulla a, vestibulum arcu. Mi dui orci
                  orci mattis quis tempus. Magna pretium ac lacus felis at
                  aliquet interdum. Egestas fringilla ultrices cras metus
                  aliquam dolor enim sodales risus.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Link
                    className="show_button"
                    to="/portraitesPageTwo"
                    onClick={myfunction}
                  >
                    Click here +
                  </Link>
                </p>
              </motion.div>
              {/* <Link to="/portraitesPageTwo">
                <div className="headshot__arrow">
                  <img src={Arrow} alt="fa" />
                </div>
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="text_img-third"
      >
        <Container className="third-container">
          <Row>
            <Col lg={6}>
              <Link to="/portraitesPageThree" onClick={myfunction}>
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
                <Link to="/" onClick={myfunction}>
                  {/* <div className="third__arrow">
                    <img src={Arrow} alt="fa" />
                  </div> */}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="headshot-fourth-section"
      >
        <Container className="position-relative">
          <Row>
            <Col lg={6}>
              <Link to="/portraitesPageFour" onClick={myfunction}>
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
              <Link
                className="show_button"
                to="/portraitesPageFour"
                onClick={myfunction}
              >
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
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
      >
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
                <Link
                  className="show_button"
                  to="/portraitesPageTwo"
                  onClick={myfunction}
                >
                  Click here +
                </Link>
              </p>
            </Col>

            <Col lg={6}>
              <Link
                className="show_button"
                to="/portraitesPageFive"
                onClick={myfunction}
              >
                <div className="portfolio-img pt_6">
                  <img src={Head4} alt="#" className="img-fluid" />
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={transition1}
      >
        <Container className="position-relative">
          <Row>
            <Col lg={6}>
              <Link
                className="show_button"
                to="/portraitesPageSix"
                onClick={myfunction}
              >
                <div className="portfolio-img pt_6">
                  <img src={Head5} alt="#" className="img-fluid" />
                </div>
              </Link>
            </Col>
            <Col lg={6}>
              <h1>
                ;and Snowhite <br /> with Jawline.
              </h1>
              <Link
                className="show_button"
                to="/portraitesPageSix"
                onClick={myfunction}
              >
                <div className="portfolio-img pt_6">
                  <img src={Head6} alt="#" className="img-fluid" />
                </div>
              </Link>
              <br />
              <br />
              <br />
              <Link
                className="show_button"
                to="/portraitesPageSix"
                onClick={myfunction}
              >
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
      </motion.section>
    </>
  );
};

export default PortraitesPage;
