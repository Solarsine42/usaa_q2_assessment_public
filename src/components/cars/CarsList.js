import React from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Car from "./Car";

class CarsList extends React.Component {
  state = {
    query: "",
    queryLoc: "1"
  };

  handleSort = e => {
    this.setState({ query: e.target.value });
  };

  handleSortLoc = e => {
    this.setState({ queryLoc: e.target.value });
  };

  render() {
    const listOfCars = this.props.cars
      .filter(
        car =>
          car.model.toLowerCase().includes(this.state.query.toLowerCase()) ||
          car.make.toLowerCase().includes(this.state.query.toLowerCase()) ||
          car.vin.toLowerCase().includes(this.state.query.toLowerCase()) ||
          car.year === Number(this.state.query)
      )
      .filter(car => car.location_id === Number(this.state.queryLoc))
      .map((car, i) => <Car key={i} car={car} />);

    const listOfLocs = this.props.locations.map(loc => {
      return <option value={loc.id}>{loc.address}</option>;
    });

    return (
      <div>
        <InputGroup className="mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search by Year, Make, Model or VIN"
            onChange={this.handleSort}
          />
          <InputGroup />
          <br />
          <InputGroup onChange={this.handleSortLoc} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Location:</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control className="col" as="select">
              {listOfLocs}
            </Form.Control>
          </InputGroup>
        </InputGroup>
        <div className="container">{listOfCars}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars.all,
    locations: state.locations.all
  };
}

export default connect(mapStateToProps)(CarsList);
