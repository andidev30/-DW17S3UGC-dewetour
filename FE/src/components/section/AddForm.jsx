import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import Axios from "axios";

function AddForm() {
  const [dataCountry, setDataCountry] = useState([]);
  const [dataImage, setDataImage] = useState([]);
  const [dataForm, setDataForm] = useState({
    title: "",
    countryId: 0,
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    dateTrip: "",
    price: "",
    quota: "",
    description: "",
  });

  const getCountry = () => {
    Axios({
      method: "get",
      url: "http://localhost:3008/api/v1/country",
    })
      .then((response) => {
        setDataCountry(response.data.data);
        // setDataForm({ ...dataForm, " " : "")
        // window.location.reload(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCountry();
  }, []);

  const changeForm = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  };

  const changeUploadImage = (e) => {
    setDataImage(e.target.files);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formDataImage = new FormData();
    formDataImage.append("image", dataImage[0], dataImage[0].name);
    formDataImage.append("image", dataImage[1], dataImage[1].name);
    formDataImage.append("image", dataImage[2], dataImage[2].name);
    // formDataImage.append({...dataForm})
    formDataImage.append("title", dataForm.title);
    formDataImage.append("countryId", dataForm.countryId);
    formDataImage.append("accomodation", dataForm.accomodation);
    formDataImage.append("transportation", dataForm.transportation);
    formDataImage.append("eat", dataForm.eat);
    formDataImage.append("day", dataForm.day);
    formDataImage.append("night", dataForm.night);
    formDataImage.append("dateTrip", dataForm.dateTrip);
    formDataImage.append("price", dataForm.price);
    formDataImage.append("quota", dataForm.quota);
    formDataImage.append("description", dataForm.description);
    const token = localStorage.getItem("token");
    Axios({
      method: "post",
      url: "http://localhost:3008/api/v1/trip",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formDataImage,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-5">
      <Form
        onSubmit={(e) => submitForm(e)}
        method="post"
        encType="multipart/form-data"
      >
        <Form.Group>
          <Form.Label className="font-weight-bold">Title Trip</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={dataForm.title}
            onChange={(e) => {
              changeForm(e);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Country</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => {
              changeForm(e);
            }}
            name="countryId"
          >
            {dataCountry &&
              dataCountry.map((td) => (
                <option key={td.id} value={td.id}>
                  {td.name}
                </option>
              ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Accomondation</Form.Label>
          <Form.Control
            type="text"
            name="accomodation"
            value={dataForm.accomodation}
            onChange={(e) => {
              changeForm(e);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Transportation</Form.Label>
          <Form.Control
            type="text"
            name="transportation"
            value={dataForm.transportation}
            onChange={(e) => {
              changeForm(e);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Eat</Form.Label>
          <Form.Control
            type="text"
            name="eat"
            value={dataForm.eat}
            onChange={(e) => {
              changeForm(e);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Duration</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                type="number"
                className="font-weight-bold my-2"
                name="day"
                value={dataForm.day}
                onChange={(e) => {
                  changeForm(e);
                }}
              />
            </Col>
            <Col md={1}>
              <Form.Label>Day</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type="text"
                className="font-weight-bold my-2"
                name="night"
                value={dataForm.night}
                onChange={(e) => {
                  changeForm(e);
                }}
              />
            </Col>
            <Col>
              <Form.Label>Night</Form.Label>
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Date Trip</Form.Label>
          <Form.Control
            type="date"
            name="dateTrip"
            value={dataForm.dateTrip}
            onChange={(e) => {
              changeForm(e);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={dataForm.price}
            onChange={(e) => {
              changeForm(e);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Quota</Form.Label>
          <Form.Control
            type="text"
            name="quota"
            value={dataForm.quota}
            onChange={(e) => {
              changeForm(e);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="description"
            value={dataForm.description}
            onChange={(e) => {
              changeForm(e);
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-weight-bold">Image</Form.Label>
          <Form.File
            id="custom-file"
            label="Add Attachment"
            multiple
            onChange={changeUploadImage}
          />
        </Form.Group>

        <div className="text-center pb-5">
          <Button variant="warning text-white" type="submit">
            Add Trip
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddForm;