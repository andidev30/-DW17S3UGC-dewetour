import React, { useEffect, useState } from "react";
import Navbar from "../components/partials/baner/Navbar";
import { Container } from "reactstrap";
import Background from "../components/img/global/bg.png";
import TitleTrip from "../components/section/TitleTrip";
import Galeri from "../components/section/Galeri";
import InfoTrip from "../components/section/InfoTrip";
import Axios from "axios";
import { useParams } from "react-router-dom";
// import ButtonBook from "../components/partials/detailTrip/ButtonBook";
import BookContext from "../context/BookContext";
import DescTrip from "../components/partials/detailTrip/DescTrip";
import Price from "../components/partials/detailTrip/Price";

function TripDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const result = await Axios({
        method: "GET",
        url: `http://localhost:3008/api/v1/trip/${id}`,
      });

      setData(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData()
  }, []);

  const [qty, setQty] = useState(1);
  const [prices, setPrices] = useState(0);

  // console.log(prices)

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Container>
          <Navbar />
        </Container>
      </div>
      <div style={{ background: "#E5E5E5", paddingBottom: "100px" }}>
        {!data || !data.Country ? (
          <h1>Loading ...</h1>
        ) : (
          <Container className="p-5">
            <TitleTrip title={data.title} country={data.Country.name} />
            <Galeri />
            <BookContext.Provider value={{ qty, setQty, prices, setPrices }}>
              <InfoTrip data={data} />
              <DescTrip desc={data.description} />
              <Price price={data.price} />
              {/* <ButtonBook /> */}
            </BookContext.Provider>
          </Container>
        )}
      </div>
    </div>
  );
}

export default TripDetail;
