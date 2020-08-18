import React from "react";
import Navbar from "../components/partials/baner/Navbar";
import { Container } from "reactstrap";
import Background from "../components/img/global/bg.png";
import TitleTrip from "../components/section/TitleTrip";
import Galeri from "../components/section/Galeri";
import InfoTrip from "../components/section/InfoTrip";

function TripDetail() {
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
        <Container className="p-5">
          <TitleTrip />
          <Galeri />
          <InfoTrip />
        </Container>
      </div>
    </div>
  );
}

export default TripDetail;
