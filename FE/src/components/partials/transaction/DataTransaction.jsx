import React, { useState, useEffect } from "react";
import { Card, Table, Button } from "react-bootstrap";
import ModalTransaction from "./ModalTransaction";
import Axios from "axios";
import ISearch from "../../img/global/search 1.png";

function DataTransaction() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);
  const [idModal, setIdModal] = useState();

  const setClickHandler = (e) => {
    setIdModal(e.target.getAttribute("id"));
    setModalShow(true);
  };

  const getData = () => {
    Axios({
      method: "get",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/orders`,
    })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
              <th>Users</th>
              <th>Trip</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!data ? (
              <tr>
                <td>no data</td>
              </tr>
            ) : (
              data.map((td, i) => (
                <tr key={td.id}>
                  <td>{i + 1}</td>
                  <td>{td.user.fullname}</td>
                  <td>{td.Trip.title}</td>
                  <td>{td.status}</td>
                  <td>
                    <Button
                      variant="transparant"
                      onClick={(e) => {
                        setClickHandler(e);
                      }}
                      id={td.id}
                    >
                      <img src={ISearch} alt="icon search" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
      {modalShow && <ModalTransaction id={idModal} />}
    </Card>
  );
}

export default DataTransaction;
