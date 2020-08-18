import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Logo from "../../img/global/Icon.png";

function TitlePay() {
  return (
    <Row>
      <Col>
        <Image src={Logo} rounded />
      </Col>
      <Col>
        <h3 className="font-weight-bold text-right">Booking</h3>
        <h5 className="text-muted text-right">Saturday 22 July 2020</h5>
      </Col>
    </Row>
  );
}

export default TitlePay;
