import React, { Component } from "react";
import "./HomeVideo.css";

import { Container, Row, Col } from "react-bootstrap";

class HomeVideo extends Component {
  render() {
  return (
    <section className="HomeVideo">
      <Container>
        <Row>
          <Col lg={12} className="">
            <div className="ratio ratio-16x9">
              <iframe
                src={this.props.video}
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
}
export default HomeVideo;
