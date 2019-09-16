import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { addCar } from "../../store/cars/actions";

class AddCar extends React.Component {
  state = {
    make: "",
    model: "",
    year: "",
    vin: "",
    miles: "",
    price: "",
    location_id: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      addCar({
        make: this.state.make,
        model: this.state.model,
        year: Number(this.state.year),
        vin: this.state.vin,
        miles: Number(this.state.miles),
        price: Number(this.state.price),
        location_id: Number(this.state.location_id),
        is_sold: false,
        sold_date: null
      })
    );
    this.setState({
      make: "",
      model: "",
      year: "",
      vin: "",
      miles: "",
      price: "",
      location_id: ""
    });
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container" style={{ position: "fixed", width: "600px" }}>
        <h3>Add New Vehicle</h3>
        <br />
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
              equired
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
            <Form.Label className="col-3">Lot#:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.location_id}
              onChange={this.handleChange}
              name="location_id"
              type="text"
              required
            />
          </Form.Group>
          <Button
            style={{ marginLeft: "35%", marginRight: "35%", width: "30%" }}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars.all
  };
};

AddCar.propTypes = {
  cars: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(AddCar);
