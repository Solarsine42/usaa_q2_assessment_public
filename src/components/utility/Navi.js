import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

const Navi = props => {
  return (
    <Navbar bg="light" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <strong>Stealership Inventory</strong>
        </Link>
      </Navbar.Brand>
      <Nav.Item>
        <Nav.Link>
          <Link to="/cars">Cars</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/locations">Locations</Link>
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default connect()(Navi);
