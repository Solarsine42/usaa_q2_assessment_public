import React from "react";
import RmvCar from "./RmvCar";
import EditCarModal from "./EditCarModal";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Card, Accordion, ButtonToolbar } from "react-bootstrap";

const Car = props => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {props.car.year + " " + props.car.make + " " + props.car.model}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div>
              <p>
                <strong>Price:</strong> ${props.car.price}
              </p>
              <p>
                <strong>Lot Number:</strong> {props.car.location_id}
              </p>
              {props.car.is_sold ? (
                <p>
                  <strong>SOLD</strong>
                </p>
              ) : (
                <p>
                  <strong>NOT SOLD</strong>
                </p>
              )}
            </div>
            <div className="container">
              <ButtonToolbar className="row">
                <div>
                  <EditCarModal id={props.car.id} car={props.car} />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <RmvCar id={props.car.id} />
                </div>
              </ButtonToolbar>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

Car.propTypes = {
  car: PropTypes.object.isRequired
};

export default connect()(Car);
