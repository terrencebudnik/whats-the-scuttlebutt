import React from "react";
import Background from "../components/Background";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <Background>
      <Container fluid className="welcome-page">
        <h1 className="welcome-page-header">What's the Scuttlebutt?</h1>
        <div className="welcome-page-body">
          <Link to="/home" className="welcome-page-link">
            Click to Find Out!
          </Link>
        </div>
      </Container>
    </Background>
  );
}

export default Welcome;
