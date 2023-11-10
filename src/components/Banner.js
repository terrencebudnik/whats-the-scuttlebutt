import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/firebaseAuth";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LoginGoogle from "./LoginGoogle";

function Banner() {
  const { currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleLoginSuccess = () => {
    handleCloseModal();
    navigate("/");
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          {currentUser ? (
            <>
              <Navbar.Text>Welcome, {currentUser.phoneNumber}</Navbar.Text>
            </>
          ) : (
            <Button variant="outline-primary" onClick={handleOpenModal}>
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginGoogle onLoginSuccess={handleLoginSuccess} />
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default Banner;
