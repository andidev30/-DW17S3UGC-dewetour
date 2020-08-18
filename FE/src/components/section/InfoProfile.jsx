import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import P1 from "../img/profile/p1.png";
import pr from "../img/profile/pr.png";
import email from "../img/profile/email.png";
import telp from "../img/profile/telp.png";
import lok from "../img/profile/lok.png";

function InfoProfile() {
  return (
    <Card
      style={{
        width: "50rem",
        marginRight: "20%",
        marginLeft: "20%",
        marginTop: "5%",
      }}
    >
      <Card.Body>
        <h4 className="font-weight-bold">Personal Info</h4>
        <div className="float-right">
          <Image src={P1} rounded /> <br />
          <Button variant="warning text-white" className="mt-1 ml-5">
            Change Photo Profile
          </Button>
        </div>
        <div>
          <div class="row mt-4">
            <div className="col-2">
              <img src={pr} alt="tes" />
            </div>
            <div className="col">
              <h6>Radif Ganteng</h6>
              <p className="text-muted">Full name</p>
            </div>
          </div>
          <div class="row">
            <div className="col-2">
              <img src={email} alt="tes" />
            </div>
            <div className="col">
              <h6>RadifGanteng@mail.com</h6>
              <p className="text-muted">email</p>
            </div>
          </div>
          <div class="row">
            <div className="col-2">
              <img src={telp} alt="tes" />
            </div>
            <div className="col">
              <h6>0812222222</h6>
              <p className="text-muted">Email</p>
            </div>
          </div>
          <div class="row">
            <div className="col-2">
              <img src={lok} alt="tes" />
            </div>
            <div className="col">
              <h6>Perumahan Permata Bintaro Residence C-3</h6>
              <p className="text-muted">Address</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default InfoProfile;
