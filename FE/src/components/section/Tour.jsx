import React from "react";
import { Card, CardColumns, Container, Col, Row } from "react-bootstrap";
import GT1 from "../img/tour/1.png";
import GT2 from "../img/tour/2.png";
import GT3 from "../img/tour/3.png";
import GT4 from "../img/tour/4.png";
import GT5 from "../img/tour/5.png";
import GT6 from "../img/tour/6.png";
import { Link } from "react-router-dom";

function Tour() {
  const tourData = [
    {
      id: 1,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT1,
    },
    {
      id: 2,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT2,
    },
    {
      id: 3,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT3,
    },
    {
      id: 4,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT4,
    },
    {
      id: 5,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT5,
    },
    {
      id: 6,
      title: "6D/4N Fun Tassie Vacation ...",
      price: "IDR. 12,398,000",
      loc: "Australia",
      img: GT6,
    },
  ];
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <CardColumns>
            {tourData.map((td) => (
              <Link to="/detail-trip" key={td.id}>
                <Card>
                  <Card.Img variant="top" src={td.img} className="p-1" />
                  <Card.Body>
                    <Card.Title>{td.title}</Card.Title>
                    <Card.Text className="row justify-content-between px-3">
                      <span className="text-warning">{td.price}</span>
                      <span className="text-muted">{td.loc}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
}

export default Tour;
