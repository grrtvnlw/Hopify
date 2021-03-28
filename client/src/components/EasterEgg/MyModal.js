import React from "react";
import { Modal, Button } from "react-bootstrap";

const MyModal = ({ show, randomBeer, closeModal }) => {
  return (
    <>
      <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>
            <h1>
              Random Beer! Cheers{" "}
              <span role="img" aria-label="cheers">
                🍻
              </span>
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{randomBeer.name}</h1>
          {randomBeer && <h3>{randomBeer.style.name}</h3>}
          <div
            style={{
              height: "100px",
              overflow: "scroll",
              marginBottom: "20px",
            }}
          >
            {randomBeer && <p>{randomBeer.style.description}</p>}
          </div>
          <ul>
            {randomBeer.abv && <li>ABV: {randomBeer.abv}%</li>}
            {randomBeer.ibu && <li>IBU: {randomBeer.ibu}</li>}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
