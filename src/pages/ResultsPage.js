import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import PaperTheme from "../components/PaperTheme";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ResultsPage.css";

function ResultsPage() {
  const location = useLocation();
  const { scoreId, userId } = location.state || {};

  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    if (scoreId && userId) {
      const db = getDatabase();
      const scoreRef = ref(db, `users/${userId}/scores/${scoreId}`);
      const unsubscribe = onValue(scoreRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setScoreData(data);
        }
      });
      return () => unsubscribe();
    }
  }, [scoreId, userId]);
  return (
    <PaperTheme>
      <Container fluid className="results-page">
        <h1 className="results-page-header">What's the Scuttlebutt?</h1>
        <div className="results-page-body">
      <h1>Results</h1>
      {scoreData ? (
        <>
          <p>Original Sentence: {scoreData.sentence}</p>
          <p>Your Input: {scoreData.userInput}</p>
          <p>Your Score: {scoreData.score}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
        <Link to="/home" className="results-page-link">
          Click to Play Again!
        </Link>
      </Container>
    </PaperTheme>
  );
}

export default ResultsPage;
