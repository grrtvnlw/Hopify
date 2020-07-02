import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function MyModal(props) {
  // const [show, setShow] = useState(false);
  const setShow = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <h1>Random Beer! Cheers <span role="img" aria-label="cheers">🍻</span></h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{props.randomBeer.name}</h1>
          {props.randomBeer && <h3>{ props.randomBeer.style.name }</h3>}
          <div style={ {height: '100px', overflow: 'scroll', marginBottom: '20px' } }>
            {props.randomBeer && <p>{ props.randomBeer.style.description }</p>}
          </div>
          <ul>
            { props.randomBeer.abv && <li>ABV: { props.randomBeer.abv }</li> }
            { props.randomBeer.ibu && <li>IBU: { props.randomBeer.ibu }</li> }
          </ul>
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