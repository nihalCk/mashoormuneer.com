import React from 'react'
import { Col,Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
        <Container>
            <Row>
                <Col lg={12}>
                        <input type="text"  />
                        <label htmlFor="email"></label>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Contact