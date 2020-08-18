import React from "react";
import {Modal, Button} from 'react-bootstrap'
import TitlePay from "../CardPay/TitlePay";
import DescPay from "../CardPay/DescPay";
import DataPay from "../CardPay/DataPay";

function ModalTransaction(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-5">
        <TitlePay />
        <DescPay />
        <DataPay />
        <div className="float-right mt-4">
        <Button variant="warning text-white">Cancel</Button> &nbsp;
        <Button variant="success text-white">Approve</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalTransaction;
