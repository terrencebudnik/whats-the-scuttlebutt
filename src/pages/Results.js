import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Results.css";

function Results() {
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
    <Container fluid className="results-page">
      <h1 className="results-page-header">What's the Scuttlebutt?</h1>
      <div className="results-page-body">
        <h1 className="results-header">Results</h1>
        {scoreData ? (
          <Container fluid className="results-box">
            <h3 className="original-scuttlebutt-header">Original Scuttlebutt: </h3>
            <p className="original-scuttlebutt">{scoreData.sentence}</p>
            <h3>Your Input: </h3>
            <p className="user-input">{scoreData.userInput}</p>
            <p>Your Score: {scoreData.score}</p>
          </Container>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Link to="/" className="results-page-link">
        Click to Play Again!
      </Link>
    </Container>
  );
}

export default Results;
