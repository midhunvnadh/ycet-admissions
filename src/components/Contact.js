import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import contact from "../assets/images/contact.jpg";
import { Parallax } from "react-parallax";
import { Parallax as Parallax2 } from "react-scroll-parallax";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDialpad, MdEmail } from "react-icons/md";
export default class Header extends React.Component {
  render() {
    return (
      <section id="contact">
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={contact}
          bgImageAlt="the header bg"
          strength={150}
          className="main-3"
        >
          <Container>
            <div className="content">
              <Parallax2 y={[20, -20]}>
                <h1 className="section-title">Contact</h1>
                <Row>
                  <Col sm={12} lg={3}>
                    <p>Leave a Quote</p>
                  </Col>
                  <Col sm={12} lg={9}>
                    <Container
                      className="cards-holder"
                      style={{ width: "100%" }}
                    >
                      {contactOption.map(
                        ({ name, data, icon, linkTrig }, i) => {
                          return (
                            <Card className="shadow-sm m-1">
                              <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                {data.map((info) => {
                                  return (
                                    <a
                                      href={`${linkTrig}${info}`}
                                      className="btn btn-secondary btn-block"
                                    >
                                      {icon} {info}
                                    </a>
                                  );
                                })}
                              </Card.Body>
                            </Card>
                          );
                        }
                      )}
                      <Card className="shadow-sm m-1">
                        <Card.Body>
                          <Card.Title>Address</Card.Title>
                          <p>
                            Younus College of Engineering and Technology,
                            Pallimukku, Vadakkevila P.O, Kollam 691010, Kerala,
                            India
                          </p>
                        </Card.Body>
                      </Card>
                    </Container>
                  </Col>
                </Row>
              </Parallax2>
            </div>
          </Container>
        </Parallax>
      </section>
    );
  }
}

const contactOption = [
  {
    name: "Phone",
    data: [9447151340, 9447502630, 9447800470],
    icon: <FaPhoneAlt />,
    linkTrig: "tel:",
  },
  {
    name: "Telephone",
    data: ["04742724305", "04742723292"],
    icon: <MdDialpad />,
    linkTrig: "tel:",
  },
  {
    name: "Email",
    data: ["info@ycet.ac.in", "infoycet@gmail.com"],
    icon: <MdEmail />,
    linkTrig: "mail-to:",
  },
];
