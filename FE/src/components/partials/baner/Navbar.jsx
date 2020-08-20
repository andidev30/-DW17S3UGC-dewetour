// import React from 'react'
import React, { useState } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import logo from "../../img/global/Icon.png";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import P2 from "../../img/profile/p2.png";
import ProfileDropdown from "../dropdown/ProfileDropdown";
// import LoginContext from "../../../context/LoginContext";

function Navbar() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [isProfileDropdown, setProfileDropdown] = useState(false);

  const showProfileDropdown = () => {
    setProfileDropdown(!isProfileDropdown);
  };

  const disableShowProfileDropdown = () => {
    setProfileDropdown(false);
  };

  return (
    <Row>
      <Col>
        <nav className="navbar navbar-expand navbar-dark bg-transparant">
          <img src={logo} alt="logo" />
          <div className="nav navbar-nav ml-auto">
            {!localStorage.getItem("token") && (
              <Col>
                <Button
                  variant="outline-light"
                  className="mr-2"
                  onClick={() => setShowModalLogin(true)}
                >
                  Login
                </Button>
                <Button
                  variant="warning"
                  className="text-white"
                  onClick={() => setShowModalRegister(true)}
                >
                  Register
                </Button>
              </Col>
            )}
            {localStorage.getItem("token") && (
              <Col>
                <Image
                  src={P2}
                  roundedCircle
                  onClick={() => showProfileDropdown()}
                  onScroll={() => disableShowProfileDropdown()}
                />
              </Col>
            )}
            {isProfileDropdown && <ProfileDropdown />}
          </div>
        </nav>
      </Col>
      {showModalLogin && <ModalLogin />}
      {showModalRegister && <ModalRegister />}
    </Row>
  );
}

export default Navbar;
