// src/components/Header.js
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">DrGarden</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link href="/">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/articles">Articles</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/products">Products</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/forum">Forum</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
