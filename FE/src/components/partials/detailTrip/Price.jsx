import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Axios from "axios";
import ModalLogin from "../baner/ModalLogin";
import { useParams, Redirect } from "react-router-dom";

function Price({ price }) {
  const [prices, setPrices] = useState(price);
  const [qty, setQty] = useState(1);

  const minusQty = () => {
    if (qty !== 1) {
      setQty(qty - 1);
      setPrices(prices - price);
    }
  };

  const plusQty = () => {
    setQty(qty + 1);
    setPrices(prices + price);
  };

  const [modalLogin, setModalLogin] = useState(false)
  const { id } = useParams()

  const buttonBook = () => {
    if (!localStorage.getItem("token")) {
      setModalLogin(true);
    } else {
      const token = localStorage.getItem("token");
      Axios({
        method: "post",
        url: "http://localhost:3008/api/v1/transaction",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          counterQty: qty,
          total: prices,
          status: "waiting payment",
          attachment: "default.jpg",
          tripid: id
        }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error.response.data.error.message);
        });
    }
  };
  return (
    <div className="mx-2 mt-4">
      <Row>
        <Col className="d-flex align-items-center align-self-center">
          <h4 className="font-weight-bold">
            <b className="text-warning">{price} </b>/ Person
          </h4>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <Button variant="warning text-white px-3 mr-3" onClick={minusQty}>
            -
          </Button>
          <span className="font-weight-bold">{qty}</span>
          <Button variant="warning text-white px-3 ml-3" onClick={plusQty}>
            +
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h4 className="font-weight-bold">Total :</h4>
        </Col>

        <Col className="d-flex justify-content-end align-items-center">
          <h4 className="font-weight-bold text-warning">{prices}</h4>
        </Col>
      </Row>
      <hr />
      <div className="d-flex justify-content-end mt-4">
        <Button onClick={buttonBook} className="btn-warning text-white">
          <b>Book Now</b>
        </Button>
        {modalLogin && <ModalLogin shows={modalLogin} />}
      </div>
    </div>
  );
}

export default Price;
