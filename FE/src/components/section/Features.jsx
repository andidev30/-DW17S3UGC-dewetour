import React from "react";
import { Card, CardDeck, Col, Row } from "react-bootstrap";
import { Container } from "reactstrap";
import G1 from "../img/feature/1.png";
import G2 from "../img/feature/2.png";
import G3 from "../img/feature/3.png";
import G4 from "../img/feature/4.png";
import "./Styles.css";

function Features() {
  const feature = [
    {
      id: 1,
      title: "Best Price Guarantee",
      desc: "A small river named Duren flows by their place and supplies",
      img: G1,
    },
    {
      id: 2,
      title: "Travellers Love Us",
      desc: "A small river named Duren flows by their place and supplies",
      img: G2,
    },
    {
      id: 3,
      title: "Best Travel Agent",
      desc: "A small river named Duren flows by their place and supplies",
      img: G3,
    },
    {
      id: 4,
      title: "Our Dedicated Support",
      desc: "A small river named Duren flows by their place and supplies",
      img: G4,
    },
  ];
  return (
    <Container style={{ marginTop: "-80px" }}>
      <Row>
        <Col>
          <CardDeck className="px-5">
            {feature.map((fe) => (
              <Card key={fe.id}>
                <Card.Img
                  variant="top"
                  src={fe.img}
                  className="feature-img p-1 mt-4 align-self-center"
                />
                <Card.Body>
                  <Card.Title className="text-center">{fe.title}</Card.Title>
                  <Card.Text className="text-muted justify-content-center">
                    {fe.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
