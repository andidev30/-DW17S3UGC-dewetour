import React from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import Ghotel from "../img/infotrip/hotel.png";
import DescTrip from "../partials/detailTrip/DescTrip";
import Price from "../partials/detailTrip/Price";
import { Link } from "react-router-dom";

function InfoTrip() {
  const infoTrip = [
    {
      id: 1,
      title: "Accomondation",
      desc: "Hotel 4 Night",
      img: Ghotel,
    },
    {
      id: 2,
      title: "Accomondation",
      desc: "Hotel 4 Night",
      img: Ghotel,
    },
    {
      id: 3,
      title: "Accomondation",
      desc: "Hotel 4 Night",
      img: Ghotel,
    },
    {
      id: 4,
      title: "Accomondation",
      desc: "Hotel 4 Night",
      img: Ghotel,
    },
    {
      id: 5,
      title: "Accomondation",
      desc: "Hotel 4 Night",
      img: Ghotel,
    },
  ];
  return (
    <div>
      <h5 className="mt-5 px-2 font-weight-bold">Information Trip</h5>
      <CardGroup className="mx-1 pt-3">
        {infoTrip.map((fe) => (
          <Card key={fe.id}>
            <Card.Title
              className="col-4 info-trip-title mb-0 pb-0 mt-3"
              key={fe.id}
            >
              {fe.title}
            </Card.Title>
            <Card.Body className="row">
              <Card.Img
                src={fe.img}
                className="img-fluid col-2 p-0 mr-2 ml-2"
              />
              <Card.Text className="info-trip-desc font-weight-bold">
                {fe.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <DescTrip />
      <Price />
      <div className="d-flex justify-content-end mt-4">
        <Link to="/pay">
          <Button variant="warning text-white">
            <b>Book Now</b>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default InfoTrip;
