import React from "react";
import PaperTheme from "../components/PaperTheme";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HowToPlayModal from "../components/HowToPlayModal";
import Button from "react-bootstrap/Button";
import "./HomePage.css";

function HomePage() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <PaperTheme>
      <Container fluid className="home-page">
        <h1 className="home-page-header">What's the Scuttlebutt?</h1>
        <div className="home-page-body">
          <Link to="/scuttlebutt" className="scuttlebutt-page-link">
            Click to Play!
          </Link>

          <Button variant="primary" onClick={() => setModalShow(true)}>
            How to Play
          </Button>

          <HowToPlayModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Container>
    </PaperTheme>
  );
}

export default HomePage;
