import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PaperTheme from "../components/PaperTheme";
import scuttlebutts from "../data/scuttlebutts";
import calculateScore from "../data/calculateScore";
import "./ScuttlebuttPage.css";

function ScuttlebuttPage() {
  const [gameState, setGameState] = useState("countdown");
  const [countdown, setCountdown] = useState(3);
  const [sentence, setSentence] = useState("");
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * scuttlebutts.scuttlebutts.length
    );
    setSentence(scuttlebutts.scuttlebutts[randomIndex]);
  }, []);

  useEffect(() => {
    let timer;

    if (gameState === "countdown" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "countdown" && countdown === 0) {
      setGameState("showSentence");
      setCountdown(5);
    } else if (gameState === "showSentence" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "showSentence" && countdown === 0) {
      setGameState("input");
      setCountdown(1000);
    } else if (gameState === "input" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "input" && countdown === 0) {
      setGameState("finished");
    }

    return () => clearTimeout(timer);
  }, [gameState, countdown]);

  useEffect(() => {
    if (gameState === "finished") {
      const score = calculateScore(sentence, userInput);
      navigate("/results", { state: { userInput } });
    }
  }, [gameState, navigate, userInput]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <PaperTheme>
      <Container fluid className="scuttlebutt-page">
        <Row>
          <Col>
            <h1 className="scuttlebutt-page-header">What's the Scuttlebutt?</h1>
          </Col>
        </Row>

        <Row className="scuttlebutt-page-body">
          {gameState === "countdown" && <div>Get ready! {countdown}</div>}
          {gameState === "showSentence" && <div>{sentence}</div>}
          {gameState === "input" && (
            <Row className="scuttlebutt-page-text-input-row">
              <Col>
                <div className="time-left-div">Time left: {countdown}</div>
              </Col>
              <textarea
                className="scuttlebutt-page-text-input"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type the sentence here..."
              />
            </Row>
          )}
          {gameState === "finished" && <div>Time's up!</div>}
        </Row>
      </Container>
    </PaperTheme>
  );
}

export default ScuttlebuttPage;
