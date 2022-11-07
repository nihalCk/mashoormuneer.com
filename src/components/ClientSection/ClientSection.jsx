import React from 'react'


import './ClientSection.css'

import { Col, Container, Row } from "react-bootstrap";


const ClientSection = () => {
  return (
    <section>
        <Container>
          <Row>
            <Col>
              <div className="client_main">
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
  )
}

export default ClientSection