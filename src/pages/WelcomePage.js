import React from "react";
import PaperTheme from "../components/PaperTheme";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

function WelcomePage() {
  return (
    <PaperTheme>
      <Container fluid className="welcome-page">
        <h1 className="welcome-page-header">What's the Scuttlebutt?</h1>
        <div className="welcome-page-body">
          <Link to="/home" className="welcome-page-link">
            Click to Find Out!
          </Link>
        </div>
      </Container>
    </PaperTheme>
  );
}

export default WelcomePage;
