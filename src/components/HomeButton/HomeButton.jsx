import React from 'react'

import './HomeButton.css'

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const HomeButton = () => {
  return (
    <Container>
        <Row>
          <Col className="button-div">
            <Link to="/portfolio">
              <Button variant="outlined">Photography</Button>
            </Link>
          </Col>
        </Row>
      </Container>
  )
}

export default HomeButton