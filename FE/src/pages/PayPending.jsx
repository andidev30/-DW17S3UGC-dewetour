import React, { useState, useEffect } from "react";
import Navbar from "../components/partials/baner/Navbar";
import { Container, Button } from "react-bootstrap";
import Background from "../components/img/global/bg.png";
import CardPay from "../components/section/CardPay";
import { useParams } from "react-router-dom";
import Axios from "axios";

function PayPending() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await Axios({
        method: "GET",
        url: `http://localhost:3008/api/v1/transaction/${id}`,
      });

      setData(result.data.data);
      console.log(data);
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
          {data.status === "waiting payment" && (
            <>
              <CardPay data={data} />
              <Button
                variant="warning text-white"
                className="btn-lg float-right"
                // onClick={() => setModalShow(true)}
                style={{
                  marginTop: "-70px",
                  margintLeft: "7%",
                  marginRight: "7%",
                }}
              >
                Pay
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default PayPending;
