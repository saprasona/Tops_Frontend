import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { User } from "lucide-react";
import LoginModal from "../../Modals/LoginModal";
import RegisterModal from "../../Modals/RegisterModal";
import Cards from "../../ProductApi/Cards";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const toggleLoginModal = () => setLoginModal(!loginModal);
  const toggleRegisterModal = () => setRegisterModal(!registerModal);
  const navigate = useNavigate();

  const loginHandler = () => {
    setUserName("User");
    setIsLoggedIn(true);
    toggleLoginModal();
  };

  const logoutHandler = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <>
      <LoginModal
        modal={loginModal}
        toggle={toggleLoginModal}
        toggleRegisterModal={toggleRegisterModal}
      />
      <RegisterModal modal={registerModal} toggle={toggleRegisterModal} toggleLoginModal={toggleLoginModal} />
      <div
        style={{
          width: "100%",
          backgroundColor: "darkgray",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div className="w-75 d-flex justify-content-center gap-4 m-3 Navbar">
          <li>
            <NavLink to={"/"} style={{ textDecoration: "none", color: "primary" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} style={{ textDecoration: "none", color: "primary" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} style={{ textDecoration: "none", color: "primary" }}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/profile"} style={{ textDecoration: "none", color: "primary" }}>
              Profile
            </NavLink>
          </li>
        </div>
        <div className="w-25 gap-4 align-items-center d-flex justify-content-end pe-4">
          {isLoggedIn ? (
            <>
              <Button color="danger" onClick={logoutHandler}>
                Logout
              </Button>
              <User size={24} role="button" onClick={() => navigate("/profile")} />
            </>
          ) : (
            <Button color="primary" onClick={toggleLoginModal}>
              Login
            </Button>
          )}
        </div>
      </div>
      <Cards />
    </>
  );
}
