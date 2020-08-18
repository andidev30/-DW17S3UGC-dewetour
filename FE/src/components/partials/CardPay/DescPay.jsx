import React from "react";
import { Image } from "react-bootstrap";
import GStruk from "../../img/global/struk.png"

function DescPay() {
  return (
    <div className="row mt-5">
      <div className="col-md-5">
        <div className="row">
          <div className="col">
            <h4 className="font-weight-bold">6D/4N Fun Tassie Vacation</h4>
            <p className="text-muted">Australia</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="text-danger">Waiting Payment</span>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="row">
          <div className="col">
            <h6 className="font-weight-bold">Date Trip</h6>
            <p className="text-muted">26 August 2020</p>
          </div>
          <div className="col">
            <h6 className="font-weight-bold">Duration</h6>
            <p className="text-muted">6 Day 4 Night</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className="font-weight-bold">Accomodation</h6>
            <p className="text-muted">Hotel 4 Night</p>
          </div>
          <div className="col">
            <h6 className="font-weight-bold">Transporation</h6>
            <p className="text-muted">Qatar Airways</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <Image src={GStruk} rounded />
          <p className="text-muted text-center">upload Payment</p>
          </div>
    </div>
  );
}

export default DescPay;
