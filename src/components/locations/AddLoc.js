import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addLoc } from "../../store/locations/actions";

class AddLoc extends React.Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      addLoc({
        name: this.state.name,
        phone: this.state.phone,
        address: this.state.address
      })
    );
    this.setState({
      name: "",
      phone: "",
      address: ""
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
        <h3 style={{ marginLeft: "20%", marginRight: "20%", width: "60%" }}>
          Add New Location
        </h3>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="row">
            <Form.Label className="col-3">Name:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              type="text"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Phone:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.phone}
              onChange={this.handleChange}
              name="phone"
              type="phone"
              required
            />
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-3">Address:</Form.Label>
            <Form.Control
              className="col-7"
              value={this.state.address}
              onChange={this.handleChange}
              name="address"
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
    locations: state.locations.all
  };
};

export default connect(mapStateToProps)(AddLoc);
