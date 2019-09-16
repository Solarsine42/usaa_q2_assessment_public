import React from "react";
import RmvLoc from "./RmvLoc";
import EditLocModal from "./EditLocModal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ButtonToolbar, Card } from "react-bootstrap";

const Loc = props => {
  return (
    <div className="container">
      <Card className="mb-3">
        <Card.Header>
          <strong>{props.loc.name}</strong>
        </Card.Header>
        <Card.Img
          style={{ width: "80%" }}
          src="https://via.placeholder.com/1400x700"
        />
        <Card.Body>
          <Card.Text>{props.loc.address}</Card.Text>
          <Card.Text>{props.loc.phone}</Card.Text>
          <ButtonToolbar className="row">
            <div style={{ marginLeft: "10px" }}>
              <EditLocModal id={props.loc.id} loc={props.loc} />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <RmvLoc id={props.loc.id} />
            </div>
          </ButtonToolbar>
        </Card.Body>
      </Card>
    </div>
  );
};

Loc.propTypes = {
  loc: PropTypes.object.isRequired
};

export default connect()(Loc);
