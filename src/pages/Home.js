import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Instructions from "../components/Instructions";
import Button from "react-bootstrap/Button";
// import logo from "../images/logo.svg"
import "./Home.css";

function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container fluid className="home-page">
      <Row className="home-page-header-row">
        <Col>
          <h1 className="home-page-header">What's the Scuttlebutt?</h1>
        </Col>
      </Row>
      {/* <Row className="home-page-subheader-row">
        <Col>
          <img className="home-page-subheader-image" src={logo} alt="Scuttlebutt Logo" />
        </Col>
      </Row> */}
      <Row className="how-to-play-row">
        <Col>
          <Button
            className="how-to-play-button"
            variant="primary"
            onClick={() => setModalShow(true)}
          >
            How to Play
          </Button>

          <Instructions show={modalShow} onHide={() => setModalShow(false)} />
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
  );
}

export default Home;
