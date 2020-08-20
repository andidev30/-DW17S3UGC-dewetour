import React from "react";
import { Card } from "react-bootstrap";
import DescPay from "../partials/CardPay/DescPay";
import DataPay from "../partials/CardPay/DataPay";
import TitlePay from "../partials/CardPay/TitlePay";

function History({data}) {
  return (
    <div>
      <div className="m-5 mx-5 p-5">
        <Card className="p-5">
          <TitlePay data={data} />
          <DescPay data={data}/>
          <DataPay data={data}/>
        </Card>
      </div>
    </div>
  );
}

export default History;
