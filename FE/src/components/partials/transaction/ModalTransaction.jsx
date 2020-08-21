import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import TitlePay from "../CardPay/TitlePay";
import DescPay from "../CardPay/DescPay";
import DataPay from "../CardPay/DataPay";
import Axios from "axios";
import CardPay from "../../section/CardPay";

function ModalTransaction({ id }) {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);

  const getData = () => {
    Axios({
      method: "get",
      url: `http://localhost:3008/api/v1/transaction/${id}`,
    })
      .then((response) => {
        setData(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleApprove = () => {
    const token = localStorage.getItem("token");
    Axios({
      method: "patch",
      url: `http://localhost:3008/api/v1/updateStatus/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        status: "approve",
      },
    })
      .then(() => {
        setShow(false);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    const token = localStorage.getItem("token");
    Axios({
      method: "patch",
      url: `http://localhost:3008/api/v1/updateStatus/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        status: "Canceled",
      },
    })
      .then(() => {
        setShow(false);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
      }}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5">
        {!data || !data?.Trip || !data?.user ? (
          <h1>Loading ..</h1>
        ) : (
          <>
            <TitlePay data={data} />
            <DescPay data={data} />
            <DataPay data={data} />
          </>
          // <CardPay data={data} />
        )}
        <div className="float-right mt-4">
          <Button variant="warning text-white" onClick={() => handleCancel()}>Cancel</Button> &nbsp;
          <Button variant="success text-white" onClick={() => handleApprove()}>
            Approve
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalTransaction;
