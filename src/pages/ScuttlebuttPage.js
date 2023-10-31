import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PaperTheme from "../components/PaperTheme";
import scuttlebutts from "../data/scuttlebutts";
import "./ScuttlebuttPage.css";

function ScuttlebuttPage() {
  const [gameState, setGameState] = useState("countdown");
  const [countdown, setCountdown] = useState(3);
  const [sentence, setSentence] = useState("");
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Set a random sentence when the component mounts
    const randomIndex = Math.floor(Math.random() * scuttlebutts.scuttlebutts.length);
    setSentence(scuttlebutts.scuttlebutts[randomIndex]);
  }, []); // Empty dependency array ensures this runs once when the component mounts

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
      setCountdown(10);
    } else if (gameState === "input" && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (gameState === "input" && countdown === 0) {
      setGameState("finished");
    }

    return () => clearTimeout(timer);
  }, [gameState, countdown]);

  useEffect(() => {
    if (gameState === "finished") {
      navigate("/results", { state: { userInput } });
    }
  }, [gameState, navigate, userInput]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <PaperTheme>
      <Container fluid className="scuttlebutt-page">
        <h1 className="scuttlebutt-page-header">What's the Scuttlebutt?</h1>
        <div className="scuttlebutt-page-body">
          {gameState === "countdown" && <div>Get ready! {countdown}</div>}
          {gameState === "showSentence" && <div>{sentence}</div>}
          {gameState === "input" && (
            <div>
              <textarea
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type the sentence here..."
              />
              <div>Time left: {countdown}</div>
            </div>
          )}
          {gameState === "finished" && <div>Time's up!</div>}
        </div>
      </Container>
    </PaperTheme>
  );
}

export default ScuttlebuttPage;
