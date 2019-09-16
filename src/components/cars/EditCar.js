import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { editCar } from "../../store/cars/actions";

class EditCar extends React.Component {
  state = {
    make: this.props.car.make,
    model: this.props.car.model,
    year: Number(this.props.car.year),
    vin: this.props.car.vin,
    miles: Number(this.props.car.miles),
    price: Number(this.props.car.price),
    location_id: Number(this.props.car.location_id),
    is_sold: Boolean(this.props.car.is_sold),
    sold_date: this.props.car.sold_date,
    id: this.props.car.id
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      this.state.is_sold === "true"
        ? editCar(
            {
              make: this.state.make,
              model: this.state.model,
              year: Number(this.state.year),
              vin: this.state.vin,
              miles: Number(this.state.miles),
              price: Number(this.state.price),
              location_id: Number(this.state.location_id),
              is_sold: true,
              sold_date: Math.floor(new Date().getTime() / 1000.0).toString(),
              id: this.state.id
            },
            this.props.id
          )
        : editCar(
            {
              make: this.state.make,
              model: this.state.model,
              year: Number(this.state.year),
              vin: this.state.vin,
              miles: Number(this.state.miles),
              price: Number(this.state.price),
              location_id: Number(this.state.location_id),
              is_sold: false,
              sold_date: null,
              id: this.state.id
            },
            this.props.id
          )
    );
    window.location.reload();
  };

  handleChange = e => {
    console.log("state at Change", e.target.value);
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    // console.log("propsAtEditCar", this.state);
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="row">
            <Form.Label className="col-3">Make:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.make}
              onChange={this.handleChange}
              name="make"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Model:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.model}
              onChange={this.handleChange}
              name="model"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Year:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.year}
              onChange={this.handleChange}
              name="year"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">VIN:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.vin}
              onChange={this.handleChange}
              name="vin"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Odometer:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.miles}
              onChange={this.handleChange}
              name="miles"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Price:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.price}
              onChange={this.handleChange}
              name="price"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Location:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.location_id}
              onChange={this.handleChange}
              name="location_id"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Sold?</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              className="col-7"
              as="select"
              name="is_sold"
            >
              <option selected={this.state.is_sold} value={true}>
                Sold
              </option>
              <option selected={!this.state.is_sold} value={false}>
                Not Sold
              </option>
            </Form.Control>
          </Form.Group>
          <Button
            style={{ marginLeft: "30%", marginRight: "30%", width: "40%" }}
            variant="primary"
            type="submit"
          >
            Commit Changes
          </Button>
        </Form>
      </div>
    );
  }
}

EditCar.propTypes = {
  car: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default connect()(EditCar);
