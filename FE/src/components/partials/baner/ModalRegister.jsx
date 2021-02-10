import React, { useState } from "react";
import { Button, Modal, ModalTitle, Form } from "react-bootstrap";
import "./style.css";
import MImgLeft from "../../img/global/m-left.png";
import MImgRight from "../../img/global/m-right.png";
import Axios from "axios";

function ModalLogin() {
  const [show, setShow] = useState(true);

  const [registerForm, setRegisterForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "user",
  });

  const [errorForm, setErrorForm] = useState("");

  const changeRegisterForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const submitRegisterForm = (e) => {
    e.preventDefault();

    Axios({
      method: "post",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/register`,
      data: { ...registerForm },
    })
      .then((response) => {
        const data = response.data.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role);
        window.location.reload(false);
        setShow(false);
      })
      .catch((error) => {
        setErrorForm(error?.response?.data?.error?.message);
      });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <img src={MImgLeft} alt="modalimageleft" className="m-img-left" />
        <img src={MImgRight} alt="modalimageleft" className="m-img-right" />
        <Modal.Body>
          <ModalTitle className="text-center mt-4 font-weight-bold">
            Register
          </ModalTitle>
          {errorForm && (
            <div className="my-3 alert alert-danger text-center">
              {errorForm}
            </div>
          )}
          <Form className="p-3 mx-5" onSubmit={(e) => submitRegisterForm(e)}>
            <Form.Group controlId="formBasicName">
              <Form.Label className="m-title">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                value={registerForm.fullname}
                name="fullname"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mt-4">
              <Form.Label className="m-title">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={registerForm.email}
                name="email"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label className="m-title">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={registerForm.password}
                name="password"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPhone" className="mt-4">
              <Form.Label className="m-title">Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                value={registerForm.phone}
                name="phone"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAddress" className="mt-4">
              <Form.Label className="m-title">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                value={registerForm.address}
                name="address"
                onChange={(e) => {
                  changeRegisterForm(e);
                }}
              />
            </Form.Group>
            <Button
              variant="warning"
              className="btn btn-block text-white font-weight-bold mt-4"
              type="submit"
              disabled={registerForm.address === "" ? true : false}
            >
              Submit
            </Button>
          </Form>
          <div className="text-center">
            <small className="text-muted text-center">
              have an account? ? Klik Here
            </small>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
