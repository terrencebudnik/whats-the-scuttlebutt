import React, { useState } from "react";
import { useAuth } from "../AuthProvider";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Login from "./Login";

function Banner() {
  const { currentUser } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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
          <Login />
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default Banner;
