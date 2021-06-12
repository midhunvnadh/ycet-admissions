import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import { Parallax as Parallax2 } from "react-scroll-parallax";
import cs from "../assets/images/cs.jpg";
import {
  FaBrain,
  FaCogs,
  FaJava,
  FaPython,
  FaReact,
  FaCode,
} from "react-icons/fa";

const Icons = () => {
  return (
    <div className="icons">
      <FaReact />
      <FaPython />
      <FaJava />
      <FaCode />
    </div>
  );
};

export default class Cs extends React.Component {
  render() {
    return (
      <Parallax
        blur={{ min: -15, max: 18 }}
        bgImage={cs}
        bgImageAlt="the cs bg"
        strength={150}
        className="main-2"
      >
        <div className="section-num shadow-lg">1</div>
        <Container>
          <div className="content p-3">
            <Icons />
            <Parallax2 y={[40, -40]}>
              <h1 className="section-title">
                Computer Science and Engineering
              </h1>
              <h2 className="subtitle">with specialization in</h2>
              <Row>
                <Col xs={12} lg={6}>
                  <Card className="shadow-sm m-1">
                    <Card.Body>
                      <Card.Title>
                        <span class="icon">
                          <FaCogs />
                        </span>
                        <span>Machine Learning</span>
                      </Card.Title>
                      <p>
                        Machine learning is a method of data analysis that
                        automates analytical model building. It is a branch of
                        artificial intelligence based on the idea that systems
                        can learn from data, identify patterns and make
                        decisions with minimal human intervention.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} lg={6}>
                  <Card className="shadow-sm m-1">
                    <Card.Body>
                      <Card.Title>
                        <span class="icon">
                          <FaBrain />
                        </span>
                        <span>Artificial Intelligence</span>
                      </Card.Title>
                      <p>
                        Artificial intelligence (AI) is the simulation of human
                        intelligence processes by machines, especially computer
                        systems. Specific applications of AI include expert
                        systems, natural language processing (NLP), speech
                        recognition and machine vision.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Parallax2>
          </div>
        </Container>
      </Parallax>
    );
  }
}
