import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Parallax } from "react-parallax";
import { Parallax as Parallax2 } from "react-scroll-parallax";
import header from "../assets/images/header.jpg";

export default class Header extends React.Component {
  render() {
    return (
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={header}
        bgImageAlt="the header bg"
        strength={150}
        className="main-1"
      >
        <Container>
          <Parallax2 y={[40, -40]}>
            <div className="content">
              <Image src={logo} alt="logo" height="210" width="210" />
              <h1>Younus College of Engineering and Technology</h1>
              <h2 className="text-muted">admission opens for B Tech 2021</h2>
            </div>
          </Parallax2>
        </Container>
      </Parallax>
    );
  }
}
