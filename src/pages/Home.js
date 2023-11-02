import React from "react";
import Background from "../components/Background";
import Banner from "../components/Banner";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Instructions from "../components/Instructions";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Background >
      <Banner />
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

            <Instructions
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
    </Background>
  );
}

export default Home;
