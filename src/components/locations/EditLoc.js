import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { editLoc } from "../../store/locations/actions";

class EditLoc extends React.Component {
  state = {
    name: this.props.loc.name,
    phone: this.props.loc.phone,
    address: this.props.loc.address
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      editLoc(
        {
          name: this.state.name,
          phone: this.state.phone,
          address: this.state.address
        },
        this.props.id
      )
    );
    window.location.reload();
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("propsAtEdit", this.props);
    console.log("stateAtEdit", this.state);
    return (
      <div className="container">
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

EditLoc.propTypes = {
  loc: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default connect()(EditLoc);
