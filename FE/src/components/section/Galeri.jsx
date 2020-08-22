import React from "react";
import { Row, Col, Image } from "react-bootstrap";

function Galeri({data}) {
  return (
    <div>
      <Row className="mt-3 mx-auto">
        <Col>
          <Image src={data.image.split(',')[0]} rounded />
        </Col>
      </Row>
      <Row className="pt-3 px-3">
        <Col md={4} className="">
          <Image src={data.image.split(',')[1]} rounded />
        </Col>
        <Col md={4} className="">
          <Image src={data.image.split(',')[2]}rounded />
        </Col>
        <Col md={4} className="">
          <Image src={data.image.split(',')[1]} rounded />
        </Col>
      </Row>
    </div>
  );
}

export default Galeri;
