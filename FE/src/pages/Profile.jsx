import React from "react";
import {Container} from 'react-bootstrap'
import Navbar from '../components/partials/baner/Navbar'
import Background from "../components/img/global/bg.png";
import InfoProfile from '../components/section/InfoProfile'
import History from '../components/section/History'
function Profile() {
  return (
    <div style={{ background: "#E5E5E5", paddingBottom:"100px" }}>
      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <Container>
          <Navbar />
        </Container>
      </div>
        <InfoProfile />
        <h3 className="mx-5 px-5 mt-5 pt-5 font-weight-bold" style={{marginBottom: "-5%"}}>History Trip</h3>
        <History />
    </div>
  );
}

export default Profile;
