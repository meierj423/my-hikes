import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand href="/">My Hikes</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} exact to="/">
            Search
          </Nav.Link>
          <Nav.Link as={NavLink} exact to="/completed">
            Completed Hikes
          </Nav.Link>
          <Nav.Link as={NavLink} exact to="/future">
            Future Hikes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
