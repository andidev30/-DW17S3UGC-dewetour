import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/partials/baner/Navbar";
import Background from "../components/img/global/bg.png";
import InfoProfile from "../components/section/InfoProfile";
import History from "../components/section/History";
import Axios from "axios";
import CardPay from "../components/section/CardPay";

function Profile() {
  const [data, setData] = useState("");
  const [dataUser, setDataUser] = useState("");

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
      setDataUser(result.data.data[0].user);
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
      {!dataUser ? <h1>Loading ...</h1> : <InfoProfile dataUser={dataUser} />}
      <h3
        className="mx-5 px-5 mt-5 pt-5 font-weight-bold"
        style={{ marginBottom: "-5%" }}
      >
        History Trip
      </h3>
      {!data ? (
        <h1>Loading ...</h1>
      ) : (
        data.map((td) => (
          <div key={td.id}>
            {td.status === "approve" && <CardPay data={td} />}
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;
