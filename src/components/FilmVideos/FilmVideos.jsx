import React, { Component } from "react";
import "./FilimVideo.css";

import { motion } from "framer-motion";
import { transition1 } from "../../transitions";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFilePlay, BsFillPlayFill } from "react-icons/bs";

class FilimVideo extends Component {
  render() {
    return (
      <motion.section

        className="Film_main"
        initial={{ opacity: -5, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "80%" }}
        transition={transition1}>
        <Container fluid >
          <Row>
            <Col lg={4}>
              <div className="film_main_sect">
                <Link to='/youtubevideo'>
                  <div className="video_main_sect">
                    <p className="play_btn"> <BsFillPlayFill
                      size={50}
                      style={{ cursor: "pointer", color: "white" }} /></p>
                    <video
                      src={this.props.video1}
                      title="YouTube video"
                      muted
                      autoPlay
                      allowfullscreen
                      playsinline
                      loop={true}
                    ></video>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={4}>
              <div className="film_main_sect">
                <div className="video_main_sect">
                  <p className="play_btn"> <BsFillPlayFill
                    size={50}
                    style={{ cursor: "pointer", color: "white" }} /></p>
                  <video
                    src={this.props.video2}
                    title="YouTube video"
                    muted
                    autoPlay
                    allowfullscreen
                    playsinline
                    loop={true}
                  ></video>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="film_main_sect">
                <div className="video_main_sect">
                  <p className="play_btn"> <BsFillPlayFill
                    size={50}
                    style={{ cursor: "pointer", color: "white" }} /></p>
                  <video
                    src={this.props.video3}
                    title="YouTube video"
                    muted
                    autoPlay
                    allowfullscreen
                    playsinline
                    loop={true}
                  ></video>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    );
  };
}
export default FilimVideo;
