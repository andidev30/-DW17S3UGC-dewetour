import React, { useState } from "react";
import { Button } from "reactstrap";
import ModalLogin from "../baner/ModalLogin";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function ButtonBook() {
  const [modalLogin, setModalLogin] = useState(false);
  const [isRedirect, setRedirect] = useState(false);
  const buttonBook = () => {
    if (!localStorage.getItem("token")) {
      setModalLogin(true);
    } else {
      const token = localStorage.getItem("token");
      Axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/api/v1/transaction`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // data: {
        //   counterQty:
        // }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response.data.error.message);
        });
    }
  };
  return (
    <div className="d-flex justify-content-end mt-4">
      {isRedirect && <Redirect to="" />}
      <Button onClick={() => buttonBook()} className="btn-warning text-white">
        <b>Book Now</b>
      </Button>
      {modalLogin && <ModalLogin shows={modalLogin} />}
    </div>
  );
}

export default ButtonBook;
