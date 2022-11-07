import React from "react";

import { Container, Row, Col } from "react-bootstrap";

const HomeVideo = () => {
  return (
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeVideo;
