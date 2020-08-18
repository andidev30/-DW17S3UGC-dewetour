import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Background from "../img/global/bg.png";
import Navbar from "../partials/baner/Navbar";
import Search from "../partials/baner/Search";
import "./Styles.css";

function Baner() {
  return (
    <Jumbotron
      fluid
      style={{
        backgroundImage: `url(${Background})`,
        height: "534px",
        repeat: "none",
        padding: 0
      }}
    >
      <Container>
        <Navbar />
        <h1 className="judul ml-3">Explore</h1>
        <h3 className="sub-judul ml-3">your amazing city together</h3>
        <Search />
      </Container>
    </Jumbotron>
  );
}

export default Baner;
