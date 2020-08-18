import React from "react";
import TitlePay from "../partials/CardPay/TitlePay";
import DescPay from "../partials/CardPay/DescPay";
import { Card } from "react-bootstrap";
import DataPay from "../partials/CardPay/DataPay";

function CardPay() {
  return (
    <div className="m-5 mx-5 p-5">
      <Card className="p-5">
        <TitlePay />
        <DescPay />
        <DataPay />
      </Card>
    </div>
  );
}

export default CardPay;
