import React from "react";
import { Table, Row, Col } from "react-bootstrap";

function DataPay() {
  return (
    <div className="mt-4">
      <Table striped hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Male</td>
            <td>081224202456</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <hr/>
      <Row>
          <Col md={8}></Col>
          <Col md={1}>Qty</Col>
          <Col md={1}>:</Col>
          <Col md={2}>1</Col>
      </Row>
      <hr/>
      <Row>
          <Col md={8}></Col>
          <Col md={1}>Total</Col>
          <Col md={1}>:</Col>
          <Col md={2} className="text-danger">IDR. 12.200.000</Col>
      </Row>
    </div>
  );
}

export default DataPay;
