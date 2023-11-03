import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Keyboard.css";

const Keyboard = ({ inputName, value, onChange }) => {
  const [isShifted, setIsShifted] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);

  const [input, setInput] = useState(value);
  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleInput = (key) => {
    let newValue;
    switch (key) {
      case 'space':
        newValue = input + " ";
        break;
      case 'enter':
        newValue = input + "\n";
        break;
      case '123':
        setIsNumbers(true);
        return; // No need to append anything to the input
      case 'ABC':
        setIsNumbers(false);
        return; // No need to append anything to the input
      case 'backspace':
        newValue = input.slice(0, -1);
        setInput(newValue);
        onChange({ [inputName]: newValue });
        return; // Exit the function after handling backspace
      default:
        newValue = input + (isShifted ? key.toUpperCase() : key);
        break;
    }

    setInput(newValue);
    onChange({ [inputName]: newValue });

    if (isShifted) {
      setIsShifted(false);
    }
  };

  // Define the buttons for numbers and symbols
  const topButtons = isNumbers ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'] : ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondButtons = isNumbers ? ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'] : ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdButtons = isNumbers ? ['_', '.', ',', '?', '!', '\''] : ["z", "x", "c", "v", "b", "n", "m"];
  const fourthButtons = isNumbers ? ['ABC', 'space', 'return'] : ['123', 'space', 'enter'];

  return (
    <Container fluid className="keyboard">
      <Row className="rows" id="top-row">
        {topButtons.map((button, idx) => (
          <Col
            className="keyboard-button"
            key={idx}
            onClick={() => handleInput(button)}
          >
            {button}
          </Col>
        ))}
      </Row>
      <Row className="rows" id="second-row">
        {secondButtons.map((button, idx) => (
          <Col
            className="keyboard-button"
            key={idx}
            onClick={() => handleInput(button)}
          >
            {button}
          </Col>
        ))}
      </Row>
      <Row className="rows" id="third-row">
        {isNumbers ? (
          <>
            {thirdButtons.map((button, idx) => (
              <Col
                className="keyboard-button"
                key={idx}
                onClick={() => handleInput(button)}
              >
                {button}
              </Col>
            ))}
            <Col className="keyboard-button" onClick={() => handleInput('backspace')}>
              ←
            </Col>
          </>
        ) : (
          <>
            <Col
              className="keyboard-button"
              onClick={() => setIsShifted((prev) => !prev)}
            >
              ↑
            </Col>
            {thirdButtons.map((button, idx) => (
              <Col
                className="keyboard-button"
                key={idx}
                onClick={() => handleInput(button)}
              >
                {button}
              </Col>
            ))}
            <Col className="keyboard-button" onClick={() => handleInput('backspace')}>
              ←
            </Col>
          </>
        )}
      </Row>
      <Row className="rows" id="fourth-row">
        {fourthButtons.map((button, idx) => (
          <Col
            className="keyboard-button"
            key={idx}
            onClick={() => handleInput(button)}
          >
            {button === 'space' ? ' ' : button}
          </Col>
        ))}
      </Row>
      </Container>
  );
};

export default Keyboard;