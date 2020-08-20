import React, { useState } from "react";
import { Button } from "reactstrap";
import ModalLogin from "../baner/ModalLogin";
import Axios from "axios";

function ButtonBook() {
  const [modalLogin, setModalLogin] = useState(false);
  const buttonBook = () => {
    if (!localStorage.getItem("token")) {
      setModalLogin(true);
    } else {
      const token = localStorage.getItem("token");
      Axios({
        method: "post",
        url: "http://localhost:3008/api/v1/transaction",
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
      <Button onClick={() => buttonBook()} className="btn-warning text-white">
        <b>Book Now</b>
      </Button>
      {modalLogin && <ModalLogin shows={modalLogin} />}
    </div>
  );
}

export default ButtonBook;
