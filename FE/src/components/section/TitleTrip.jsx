import React from "react";
import { Row, Col } from "reactstrap";

function TitleTrip({ title, country }) {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="mt-2 font-weight-bold text-uppercase">{title}</h1>
          <h5 className="text-muted text-capitalize">{country}</h5>
        </Col>
      </Row>
    </div>
  );
}

export default TitleTrip;
