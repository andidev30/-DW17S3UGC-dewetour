import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Logo from "../../img/global/Icon.png";

function TitlePay({ data }) {
  return (
    <Row>
      <Col>
        <Image src={Logo} rounded />
      </Col>
      <Col>
        <h3 className="font-weight-bold text-right">Booking</h3>
        <h5 className="text-muted text-right">{data.createdAt}</h5>
      </Col>
    </Row>
  );
}

export default TitlePay;
