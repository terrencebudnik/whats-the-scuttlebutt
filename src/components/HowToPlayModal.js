import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function HowToPlayModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How To Play
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Pay Attention to the Scuttlebutt</h4>
        <ul>
          <li>The Scuttlebutt will appear for seconds</li>
          <li>It will then disappear</li>
          <li>Remember the Scuttlebutt</li>
          <li>Type the Scuttlebutt just as you saw it</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HowToPlayModal;
