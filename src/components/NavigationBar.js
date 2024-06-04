import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">City Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/challenges">Challenges</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
