import React from "react";
import PaperTheme from "../components/PaperTheme";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ResultsPage.css";

function ResultsPage() {
  const location = useLocation();
  const { userInput } = location.state || {};

  return (
    <PaperTheme>
      <Container fluid className="results-page">
        <h1 className="results-page-header">What's the Scuttlebutt?</h1>
        <div className="results-page-body">
          <h1>Results</h1>
          <p>Your input was: {userInput}</p>
        </div>
        <Link to="/home" className="results-page-link">
          Click to Play Again!
        </Link>
      </Container>
    </PaperTheme>
  );
}

export default ResultsPage;
