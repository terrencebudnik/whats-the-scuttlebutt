import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Container, Accordion } from "react-bootstrap";
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
    <>
    <Container fluid className="results-page">
      <div className="results-page-body">
        <h2 className="results-header">Results</h2>
        {scoreData ? (
          <Container className="results-box">
            <h3>Your Score: {scoreData.score}</h3>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="original-scuttlebutt-header">Original Scuttlebutt</Accordion.Header>
                <Accordion.Body className="accordian-body-original">{scoreData.sentence}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" >
                <Accordion.Header >
                 

                  Your Scuttlebutt
                 
                  </Accordion.Header>
                <Accordion.Body className="accordian-body-your">{scoreData.userInput}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      
    </Container>
    <Link to="/" className="results-page-link">
    Click to Play Again!
  </Link>
  </>
  );
}

export default Results;
