import React, { Component } from "react";

import "./HomeButton.css";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class HomeButton extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="button-div">
            <Link to={this.props.path}>
              <Button variant="outlined">{this.props.heading}</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeButton;
