import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Gl1 from "../img/galeri/gl1.png";
import Gl2 from "../img/galeri/gl2.png";
import Gl3 from "../img/galeri/gl3.png";
import Gl4 from "../img/galeri/gl4.png";

function Galeri() {
  return (
    <div>
      <Row className="mt-3 mx-auto">
        <Col>
          <Image src={Gl1} rounded />
        </Col>
      </Row>
      <Row className="pt-3 px-3">
        <Col md={4} className="">
          <Image src={Gl3} rounded />
        </Col>
        <Col md={4} className="">
          <Image src={Gl4} rounded />
        </Col>
        <Col md={4} className="">
          <Image src={Gl2} rounded />
        </Col>
      </Row>
    </div>
  );
}

export default Galeri;
