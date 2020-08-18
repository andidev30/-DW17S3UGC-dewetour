import React from "react";
import { Button, Modal, ModalTitle, Form } from "react-bootstrap";
import "./style.css";
import MImgLeft from "../../img/global/m-left.png";
import MImgRight from "../../img/global/m-right.png";

function ModalLogin(props) {
  // console.log(...props)
  return (
    <div>
      <Modal
        {...props}
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
          <Form className="p-3 mx-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="m-title">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-4">
              <Form.Label className="m-title">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
    </div>
  );
}

export default ModalLogin;
