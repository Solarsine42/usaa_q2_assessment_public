import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import { rmvLoc } from "../../store/locations/actions";
import { connect } from "react-redux";

const RmvLoc = props => {
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
          <Modal.Title>Remove Location?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => props.dispatch(rmvLoc(props.id))}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

RmvLoc.propTypes = {
  id: PropTypes.number.isRequired
};

export default connect()(RmvLoc);
