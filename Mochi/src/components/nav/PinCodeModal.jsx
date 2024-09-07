import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function PinCodeModal({ show, onClose, onSubmit }) {
  const [pin, setPin] = useState("");

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleSubmit = () => {
    if (pin === "Dami") {
      // !Aquí puedes cambiar el PIN por el que necesites
      onSubmit();
    } else {
      alert("PIN incorrecto");
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter PIN Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="password"
          value={pin}
          onChange={handlePinChange}
          placeholder="Enter PIN"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PinCodeModal;
