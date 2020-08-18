import React from "react";
import Navbar from "../components/partials/baner/Navbar";
import { Container } from "react-bootstrap";
import Background from "../components/img/global/bg.png";
import CardPay from "../components/section/CardPay";
import { Button } from "react-bootstrap";
import ModalPay from "../components/partials/CardPay/ModalPay";

function Pay() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div style={{ background: "#E5E5E5", paddingBottom:"100px" }}>
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Container>
          <Navbar />
        </Container>
      </div>

      <CardPay />
      <Button
        variant="warning text-white"
        className="btn-lg float-right"
        onClick={() => setModalShow(true)}
        style={{ marginTop: "-70px", margintLeft:"7%", marginRight:"7%" }}
      >
        Pay
      </Button>
      <ModalPay show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Pay;
