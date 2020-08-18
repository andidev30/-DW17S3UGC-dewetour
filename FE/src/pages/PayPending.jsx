import React from "react";
import Navbar from "../components/partials/baner/Navbar";
import { Container } from "react-bootstrap";
import Background from "../components/img/global/bg.png";
import CardPay from "../components/section/CardPay";

function PayPending() {
  return (
    <div style={{ background: "#E5E5E5", paddingBottom:"100px"}}>
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
    </div>
  );
}

export default PayPending;