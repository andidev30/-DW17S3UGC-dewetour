import React, { useState } from "react";
import { Button, Modal, ModalTitle, Form } from "react-bootstrap";
import "./style.css";
import MImgLeft from "../../img/global/m-left.png";
import MImgRight from "../../img/global/m-right.png";
import Axios from "axios";

function ModalLogin() {
  const [show, setShow] = useState(true);
  const [errorForm, setErrorForm] = useState();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeFormLogin = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const submitLoginForm = (e) => {
    e.preventDefault();

    Axios({
      method: "post",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/login`,
      data: { ...loginForm },
    })
      .then(function (response) {
        const data = response.data.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role);
        setShow(false);
        window.location.reload(false);
      })
      .catch(function (error) {
        setErrorForm(error.response.data.error.message);
      });
  };
  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <img src={MImgLeft} alt="modalimageleft" className="m-img-left" />
        <img src={MImgRight} alt="modalimageleft" className="m-img-right" />
        <Modal.Body>
          <ModalTitle className="text-center mt-4 font-weight-bold">
            Login
          </ModalTitle>
          {errorForm && (
            <div className="my-3 alert alert-danger text-center">
              {errorForm}
            </div>
          )}
          <Form className="p-3 mx-5" onSubmit={(e) => submitLoginForm(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="m-title">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={loginForm.email}
                placeholder="Enter email"
                onChange={(e) => changeFormLogin(e)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label className="m-title">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginForm.password}
                onChange={(e) => changeFormLogin(e)}
              />
            </Form.Group>
            <Button
              variant="warning"
              className="btn btn-block text-white font-weight-bold mt-4"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <div className="text-center">
            <small className="text-muted text-center">
              Don't have an account? ? Klik Here
            </small>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
