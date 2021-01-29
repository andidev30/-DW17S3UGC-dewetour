import React, { useState, useEffect } from "react";
import Navbar from "../components/partials/baner/Navbar";
import { Container } from "react-bootstrap";
import Background from "../components/img/global/bg.png";
import CardPay from "../components/section/CardPay";
import { Button } from "react-bootstrap";
import ModalPay from "../components/partials/CardPay/ModalPay";
import Axios from "axios";

function Pay() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      const result = await Axios({
        method: "GET",
        url: `http://147.139.192.126:3008/api/v1/orderByUser`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
      {!data ? (
        <h1>loading..</h1>
      ) : (
        data.map((td) => (
          <div key={td.id}>
            {td.status === "waiting approve" ? (
              <>
                <CardPay data={td} />
                {td.status === "waiting payment" && (
                  <Button
                    variant="warning text-white"
                    className="btn-lg float-right"
                    onClick={() => setModalShow(true)}
                    style={{
                      marginTop: "-70px",
                      margintLeft: "7%",
                      marginRight: "7%",
                    }}
                  >
                    Pay
                  </Button>
                )}
              </>
            ) : (
              <h1>&nbsp;</h1>
            )}
          </div>
        ))
      )}

      {/* <ModalPay show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
}

export default Pay;
