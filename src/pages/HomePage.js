import React from "react";
import PaperTheme from "../components/PaperTheme";
import Nav from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HowToPlayModal from "../components/HowToPlayModal";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import "./HomePage.css";

function HomePage() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <PaperTheme>
      <Nav />
      <Container fluid className="home-page">
        <Row className="home-page-header-row">
          <Col>
            <h1 className="home-page-header">What's the Scuttlebutt?</h1>
          </Col>
        </Row>

        <Row className="how-to-play-row">
          <Col>
            <Button
              className="how-to-play-button"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              How to Play
            </Button>

            <HowToPlayModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
        <Row className="click-to-play-row">
          <Col>
            <Link className="click-to-play-link" to="/scuttlebutt">
              Click to Play!
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </PaperTheme>
  );
}

export default HomePage;
