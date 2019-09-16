import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import EditCar from "./EditCar";

const EditCarModal = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="sm" variant="success" onClick={handleShow}>
        View/Edit Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vehicle Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditCar id={props.id} car={props.car} />
        </Modal.Body>
      </Modal>
    </>
  );
};

EditCarModal.propTypes = {
  car: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default EditCarModal;
