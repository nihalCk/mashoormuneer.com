import "./homeSlider.css";
import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
// import Button from "@mui/material/Button";




import home1 from "../../assets/img/home-section-3-img1.png";
// import home2 from "../../assets/img/home-section-3-img2.png";
// import home3 from "../../assets/img/home-section-3-img3.png";
// import home4 from "../../assets/img/home-section-3-img4.png";

// import home5 from "../../assets/img/home_last1.png";
// import home6 from "../../assets/img/home_last2.png";



// import { Link } from "react-router-dom";

const scaleVariants = {
  whileInView: {
    scale: [0.5, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const homeSlider = () => {
  return (
    <>
      {/* <Container>
        <Row>
          <Col className="button-div">
            <Link to="/portfolio">
              <Button variant="outlined">Photography</Button>
            </Link>
          </Col>
        </Row>
      </Container> */}
      <section className="home_second_section home-slider pb-0">
        <Container>
          <Row>
            <Col xs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
            <Col xs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
            <Col xsxs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col xs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
            <Col xs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
            <Col xs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col xs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
            <Col xs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
            <Col xs={4}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="fill "
              >
                <img src={home1} alt="#" className="img-fluid" />
              </motion.div>
            </Col>

            {/* <Col lg={4} className="pt-4 d-flex justify-content-center">
              <div className="fill about__img">
                <img src={home2} alt="#" className="img-fluid" />
              </div>
            </Col>
            <Col lg={4} className="pt-4 d-flex justify-content-center">
              <div className="fill">
                <img src={home3} alt="#" className="img-fluid" />
              </div>
            </Col>
            <Col lg={4} className="pt-4 d-flex justify-content-center">
              <div className="fill">
                <img src={home4} alt="#" className="img-fluid" />
              </div>
            </Col> */}
          </Row>
        </Container>
      </section> 
      <section>
        <Container>
          <Row>
            <Col lg={12} className="">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/pdY94RWx9Pg"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
              {/* <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="fill "
              >
                <img src={home5} alt="#" className="img-fluid" />
              </motion.div>
            </Col>
            <Col lg={6} className="pa_tp-5">
              <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="fill pa_tp-5"
              >
                <img src={home6} alt="#" className="img-fluid" />
              </motion.div> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="">
                <h1 className="mt-lg-0 mt-4 mb-0 pre_line letters client-logo">
                  <span className="lettersspan">
                    <span className="letter_1" style={{ color: "#212529" }}>
                      YOU DREAM
                    </span>
                  </span>
                  <br />
                  <span className="lettersspan">
                    <span className="letter_2">WE CREATE</span>
                  </span>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default homeSlider;
