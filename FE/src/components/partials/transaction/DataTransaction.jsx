import React from "react";
import { Card, Table, Button } from "react-bootstrap";
import ModalTransaction from "./ModalTransaction";

function DataTransaction() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card
      className="mb-5"
      style={{ width: "70rem", marginLeft: "10%", marginRight: "10%" }}
    >
      <Card.Body>
        <Table striped hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Orders</th>
              <th>Trip</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <Button
                  variant="warning text-white"
                  onClick={() => setModalShow(true)}
                >
                  Detail
                </Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
      <ModalTransaction show={modalShow} onHide={() => setModalShow(false)} />
    </Card>
  );
}

export default DataTransaction;
