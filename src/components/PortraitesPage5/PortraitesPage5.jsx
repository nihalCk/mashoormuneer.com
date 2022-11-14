import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Head4 from "../../assets/img/headshot page/MSR04688.png";

const PortraitesPage6 = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={6}>
            <h1>
              ;and Snowhite <br /> with Jawline.
            </h1>
            <p>
              TAt amet, volutpat laoreet morbi arcu eu. Quam augue maecenas
              tristique dolor tempor nulla a, vestibulum arcu. Mi dui orci orci
              mattis quis tempus. Magna pretium ac lacus felis at aliquet
              interdum. Egestas fringilla ultrices cras metus aliquam dolor enim
              sodales risus.
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
  );
};

export default PortraitesPage6;
