import React from "react";
import Background from "../components/img/global/bg.png";
import { Container } from "react-bootstrap";
import Navbar from "../components/partials/baner/Navbar";
import AddForm from '../components/section/AddForm'

function TripAdd() {
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
      <div style={{ background: "#E5E5E5", paddingBottom:"100px" }}>
        <Container>
          <h3 className="font-weight-bold pt-5 pb-4 ml-4">Add Trip</h3>
          <AddForm />
        </Container>
      </div>
    </div>
  );
}

export default TripAdd;
