import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Axios from "axios";
import { useParams } from "react-router-dom";

function DescPay({ data }) {
  const [dataImage, setDataImage] = useState([]);
  const { id } = useParams();
  const [imageStruk, setImageStruk] = useState(data.attachment);

  const changeSelecctedFile = (e) => {
    setDataImage(e.target.files[0]);
  };
  const uploadSelectedFile = () => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("attachment", dataImage, dataImage.name);
    Axios({
      method: "patch",
      url: `http://localhost:3008/api/v1/uploadStruk/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    })
      .then((response) => {
        setImageStruk(response.data.data.attachment);
        // console.log(formData)
      })
      .catch((error) => {
        console.log(error.response.data.error.DescPaymessage);
      });
  };

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="row">
          <div className="col">
            <h4 className="font-weight-bold">{data.Trip.title}</h4>
            <p className="text-muted">{data.Trip.Country.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="text-danger">{data.status}</span>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="row">
          <div className="col">
            <h6 className="font-weight-bold">Date Trip</h6>
            <p className="text-muted">{data.Trip.dateTrip}</p>
          </div>
          <div className="col">
            <h6 className="font-weight-bold">Duration</h6>
            <p className="text-muted">
              {data.Trip.day} Day {data.Trip.night} Night
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className="font-weight-bold">Accomodation</h6>
            <p className="text-muted">{data.Trip.accomodation}</p>
          </div>
          <div className="col">
            <h6 className="font-weight-bold">Transporation</h6>
            <p className="text-muted">{data.Trip.transportation}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        {!(imageStruk === "default.jpg") && <Image src={imageStruk} rounded />}
        {data.status === "waiting payment" && (
          <>
            <input type="file" onChange={changeSelecctedFile} />
            <button
              onClick={uploadSelectedFile}
              className="btn btn-warning btn-sm text-white mt-3"
            >
              Upload
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default DescPay;
