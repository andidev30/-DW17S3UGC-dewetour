import React from "react";
import "./style.css";
import D1 from "../../img/dropdown/user 2.png";
import D2 from "../../img/dropdown/Vector.png";
import D3 from "../../img/dropdown/logout 1.png";
import D4 from "../../img/dropdown/journey 1.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileDropdown() {

  const setLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("email", "");
    localStorage.setItem("role", "");
    window.location.reload(false);
  }
  return (
    <div>
      <div className="kotak">
        {localStorage.role === "admin" ? (
          <Link to="/trip">
          <p>
            <Image src={D4} className="mr-3" />
            <span className="text-dark font-weight-bold">Trip</span>
          </p>
        </Link>
        ) : (
          <>
            <Link to="/profile">
              <p>
                <Image src={D1} className="mr-3" />
                <span className="text-dark font-weight-bold">Profile</span>
              </p>
            </Link>
            <Link to="/pay">
              <p>
                <Image src={D2} className="mr-3" />
                <span className="text-dark font-weight-bold">Pay</span>
              </p>
            </Link>
          </>
        ) }
        <hr />
        <Link to="">
          <p onClick={setLogout}>
            <Image src={D3} className="mr-3" />
            <span className="text-dark font-weight-bold">Log Out</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProfileDropdown;
