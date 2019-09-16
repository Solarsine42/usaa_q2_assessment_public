import React from "react";
import { connect } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Loc from "./Loc";

class LocList extends React.Component {
  state = {
    query: ""
  };

  handleSort = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const listOfLocs = this.props.locations
      .filter(
        loc =>
          loc.name.toLowerCase().includes(this.state.query.toLowerCase()) ||
          loc.address.toLowerCase().includes(this.state.query.toLowerCase())
      )
      .map((loc, i) => <Loc key={i} loc={loc} />);

    return (
      <div>
        <InputGroup className="mb-4">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search by Address or Name..."
            onChange={this.handleSort}
          />
          <InputGroup />
        </InputGroup>
        <div className="container">{listOfLocs}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations.all
  };
}

export default connect(mapStateToProps)(LocList);
