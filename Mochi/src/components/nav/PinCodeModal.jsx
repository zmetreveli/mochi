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
      <Modal.Header>
        <Modal.Title>Entrez le code PIN</Modal.Title>
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
        <Button
          className="btn btn-light"
          style={{
            backgroundColor: "#dccca3",
            color: "white",
            borderColor: "white",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#b8a178")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#dccca3")}
          onClick={onClose}
        >
          Fermer
        </Button>

        <Button
          className="btn btn-light"
          style={{
            backgroundColor: "#dccca3",
            color: "white",
            borderColor: "white",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#b8a178")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#dccca3")}
          onClick={handleSubmit}
        >
          Soumettre
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PinCodeModal;
