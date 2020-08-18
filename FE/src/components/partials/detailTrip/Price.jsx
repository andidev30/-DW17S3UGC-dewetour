import React from "react";
import {Row, Col, Button} from "react-bootstrap"

function Price() {
  return (
    <div className="mx-2 mt-4">
      <Row>
        <Col className="d-flex align-items-center align-self-center">
          <h4 className="font-weight-bold">
            <b className="text-warning">IDR. 12,398 </b>/ Person
          </h4>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
            <Button variant="warning text-white px-3 mr-3">-</Button>
            1
            <Button variant="warning text-white px-3 ml-3">+</Button>
        </Col>
      </Row>
      <hr/>
      <Row>
          <Col>
          <h4 className="font-weight-bold">
            Total :
          </h4>
          </Col>

          <Col className="d-flex justify-content-end align-items-center">
          <h4 className="font-weight-bold text-warning">
            12.000.000
          </h4>
          </Col>
      </Row>
      <hr/>
    </div>
  );
}

export default Price;
