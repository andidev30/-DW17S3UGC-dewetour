import React from "react";
import { Image } from "react-bootstrap";
import GStruk from "../../img/global/struk.png"

function DescPay({data}) {
  return (
    <div className="row mt-5">
      <div className="col-md-5">
        <div className="row">
          <div className="col">
            <h4 className="font-weight-bold">{data.Trip.title}</h4>
            <p className="text-muted">{data.Trip.Country.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="text-danger">{data.status}</span>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="row">
          <div className="col">
            <h6 className="font-weight-bold">Date Trip</h6>
            <p className="text-muted">{data.Trip.dateTrip}</p>
          </div>
          <div className="col">
            <h6 className="font-weight-bold">Duration</h6>
            <p className="text-muted">{data.Trip.day} Day {data.Trip.night} Night</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className="font-weight-bold">Accomodation</h6>
            <p className="text-muted">{data.Trip.accomodation}</p>
          </div>
          <div className="col">
            <h6 className="font-weight-bold">Transporation</h6>
            <p className="text-muted">{data.Trip.transportation}</p>
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
