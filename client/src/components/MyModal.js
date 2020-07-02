import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function MyModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // props.randomBeer && setShow(true)

  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // style={ {visibility: props.visibility} }
      >
        <Modal.Header>
          <Modal.Title>
            <h1>{props.randomBeer.name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {props.randomBeer && <h2>{ props.randomBeer.style.description }</h2>} */}
          <ul>
            <li>ABV: { props.randomBeer.abv}</li>
            <li>IBU: { props.randomBeer.ibu }</li>
          </ul>
          <p>Hi Wes!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}