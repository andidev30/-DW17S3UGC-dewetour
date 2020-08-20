import React, { useState, useEffect } from "react";
import { Card, CardColumns, Container, Col, Row } from "react-bootstrap";
// import GT1 from "../img/tour/1.png";
// import GT2 from "../img/tour/2.png";
// import GT3 from "../img/tour/3.png";
// import GT4 from "../img/tour/4.png";
// import GT5 from "../img/tour/5.png";
// import GT6 from "../img/tour/6.png";
import { Link } from "react-router-dom";
import Axios from "axios";
// import {tripData} from '../../data/tripData'

function Tour() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const result = await Axios({
        method: "GET",
        url: "http://localhost:3008/api/v1/trips",
      });

      setData(result.data.data);
      // console.log(result.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <CardColumns>
            {!data ? <h1>Loading</h1> : data.map((td) => (
              <Link to={`/detail-trip/${td.id}`} key={td.id}>
                <Card>
                  <Card.Img variant="top" src={`http://localhost:3008/Images/${td.image}`} className="p-1" />
                  <Card.Body>
                    <Card.Title>{td.title}</Card.Title>
                    <Card.Text className="row justify-content-between px-3">
                      <span className="text-warning">{td.price}</span>
                      <span className="text-muted">{td.Country.name}</span>
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
