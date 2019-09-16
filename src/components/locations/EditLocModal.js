import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import EditLoc from "./EditLoc";

const EditLocModal = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("propsAtModal", props);
  return (
    <>
      <Button size="sm" variant="success" onClick={handleShow}>
        View/Edit Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Property Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditLoc id={props.id} loc={props.loc} />
        </Modal.Body>
      </Modal>
    </>
  );
};

EditLocModal.propTypes = {
  loc: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default EditLocModal;
