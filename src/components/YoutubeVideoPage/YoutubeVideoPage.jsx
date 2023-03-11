import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './YoutubeVideoPage.css'

const YoutubeVideoPage = () => {
    return (
        <>
            <Container className='youtube-video'>
                <Row>
                    <Col lg={12} >
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/pdY94RWx9Pg" title="Cinematic Showreel 2022 | Mashoor Muneer" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default YoutubeVideoPage