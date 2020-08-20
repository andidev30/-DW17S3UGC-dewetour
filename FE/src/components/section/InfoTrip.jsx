import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import Ghotel from "../img/infotrip/hotel.png";
import Gplane from "../img/infotrip/plane.png";
import Gcalender from "../img/infotrip/calendar.png";
import Gtime from "../img/infotrip/time.png";
import Gmeat from "../img/infotrip/meal 1.png";

function InfoTrip({ data }) {
  return (
    <div>
      <h5 className="mt-5 px-2 font-weight-bold">Information Trip</h5>
      <CardGroup className="mx-1 mt-3">
        <Card>
          <Card.Title className="col pt-2 info-trip-title mb-0 pb-0">
            Accomondation
          </Card.Title>
          <Card.Body className="row">
            <Card.Img src={Ghotel} className="img-fluid col-2 p-0 h-75 ml-2" />
            <Card.Text className="col info-trip-desc font-weight-bold">
              {data.accomodation}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title className="col pt-2 info-trip-title mb-0 pb-0">
            Transportation
          </Card.Title>
          <Card.Body className="row">
            <Card.Img src={Gplane} className="img-fluid col-2 p-0 mr-2 ml-2 h-75" />
            <Card.Text className="col info-trip-desc font-weight-bold">
              {data.transportation}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title className="col pt-2 info-trip-title mb-0 pb-0">
            Eat
          </Card.Title>
          <Card.Body className="row">
            <Card.Img src={Gmeat} className="img-fluid col-2 p-0 ml-2 h-75" />
            <Card.Text className="col info-trip-desc font-weight-bold">
              {data.eat}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title className="col pt-2 info-trip-title mb-0 pb-0">
            Duration
          </Card.Title>
          <Card.Body className="row">
            <Card.Img src={Gtime} className="img-fluid col-2 p-0 ml-2 h-75" />
            <Card.Text className="col info-trip-desc font-weight-bold">
            {data.day} day {data.night} night
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title className="col pt-2 info-trip-title mb-0 pb-0">
            Date Trip
          </Card.Title>
          <Card.Body className="row">
            <Card.Img src={Gcalender} className="img-fluid col-2 p-0 ml-2 h-75" />
            <Card.Text className="col info-trip-desc font-weight-bold">
              {data.dateTrip}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default InfoTrip;
