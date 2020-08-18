// import React from 'react'
import React, { useState,useContext } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import logo from "../../img/global/Icon.png";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import P2 from "../../img/profile/p2.png";
import ProfileDropdown from "../dropdown/ProfileDropdown";
import LoginContext from '../../../context/LoginContext'

function Navbar() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
//   // const [isLogedIn, setLogin] = useState(true);
// <<<<<<< HEAD
//   const isLoggedIn = true;
// =======
//   // const isLoggedIn = false;
// >>>>>>> dev-route
  const [isProfileDropdown, setProfileDropdown] = useState(false);

  const showProfileDropdown = () => {
    setProfileDropdown(!isProfileDropdown);
  };

  const disableShowProfileDropdown = () => {
    setProfileDropdown(false);
  };

  const status = useContext(LoginContext)

  return (
    <>
      <Row>
        <Col>
          <nav className="navbar navbar-expand navbar-dark bg-transparant">
            <img src={logo} alt="logo" />
            <div className="nav navbar-nav ml-auto">
              {!status.isLoggedIn && (
                <Col>
                  <Button
                    variant="outline-light"
                    className="mr-2"
                    onClick={() => setShow(true)}
                  >
                    Login
                  </Button>
                  <Button
                    variant="warning"
                    className="text-white"
                    onClick={() => setShowRegister(true)}
                  >
                    Register
                  </Button>
                </Col>
              )}
              {status.isLoggedIn && (
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
        {show && <ModalLogin show={show} onHide={() => setShow(false)} />}
        <ModalRegister
          show={showRegister}
          onHide={() => setShowRegister(false)}
        />
      </Row>
    </>
  );
}

export default Navbar;
