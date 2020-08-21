import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalPay from "./ModalPay";
import Axios from "axios";
import { useParams } from "react-router-dom";

function ButtonPay() {
  const [modalPay, setModalPay] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const handleClickPay = () => {
    Axios({
      method: "patch",
      url: `http://localhost:3008/api/v1/updateStatus/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        status: "waiting approve",
      },
    }).then((response) => {
      setModalPay(true);
    }).catch((error => {
        console.log(error)
    }))
  };

  return (
    <>
      <Button
        variant="warning text-white"
        className="btn-lg float-right"
        onClick={handleClickPay}
        style={{
          marginTop: "-70px",
          margintLeft: "7%",
          marginRight: "7%",
        }}
      >
        Pay
      </Button>
      {modalPay && <ModalPay />}
    </>
  );
}

export default ButtonPay;
