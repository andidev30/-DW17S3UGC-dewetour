import React from "react";
import { Container, Button } from "react-bootstrap";
import Navbar from "../components/partials/baner/Navbar";
import Background from "../components/img/global/bg.png";
import Tour from "../components/section/Tour";
import {Link} from "react-router-dom"

function Trip() {
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
        <Container className="">
          <div className="px-3 pt-5">
            <Link to="/trip/add">
              <Button
                variant="warning text-white"
                className="float-right font-weight-bold"
              >
                Add Trip
              </Button>
            </Link>
            <h3 className="font-weight-bold">Income Trip</h3>
          </div>
          <Tour />
        </Container>
      </div>
    </div>
  );
}

export default Trip;
