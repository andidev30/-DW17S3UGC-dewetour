import React, { useState, useEffect } from "react";
import Navbar from "../components/partials/baner/Navbar";
import { Container } from "react-bootstrap";
import Background from "../components/img/global/bg.png";
import CardPay from "../components/section/CardPay";
import { useParams } from "react-router-dom";
import Axios from "axios";
import ButtonPay from "../components/partials/CardPay/ButtonPay";

function PayPending() {
  const { id } = useParams();
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const result = await Axios({
        method: "GET",
        url: `${process.env.REACT_APP_SERVER_URL}/api/v1/transaction/${id}`,
      });

      setData(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ background: "#E5E5E5", paddingBottom: "100px" }}>
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Container>
          <Navbar />
        </Container>
      </div>
      {!data || !data?.Trip || !data?.user ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          {data.status === "waiting payment" ? (
            <>
              <CardPay data={data} />
              <ButtonPay />
            </>
          ) : (
            <h1>no data</h1>
          )}
        </>
      )}
    </div>
  );
}

export default PayPending;
