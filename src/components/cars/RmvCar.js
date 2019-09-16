import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import { rmvCar } from "../../store/cars/actions";
import { connect } from "react-redux";

const RmvCar = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" size="sm" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Remove from Inventory?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => props.dispatch(rmvCar(props.id))}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

RmvCar.propTypes = {
  id: PropTypes.number.isRequired
};

export default connect()(RmvCar);
