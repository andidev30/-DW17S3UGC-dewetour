import React from "react";
import { Table, Row, Col } from "react-bootstrap";

function DataPay({ data }) {
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
            <td>{data.user.fullname}</td>
            <td>laki laki</td>
            <td>{data.user.phone}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <Row>
        <Col md={8}></Col>
        <Col md={1}>Qty</Col>
        <Col md={1}>:</Col>
        <Col md={2}>{data.counterQty}</Col>
      </Row>
      <hr />
      <Row>
        <Col md={8}></Col>
        <Col md={1}>Total</Col>
        <Col md={1}>:</Col>
        <Col md={2} className="text-danger">
          IDR. {data.total}
        </Col>
      </Row>
    </div>
  );
}

export default DataPay;
