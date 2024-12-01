import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = ({ isLoggedIn, handleLogout }) => {
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
          {isLoggedIn ? (
            <NavItem>
              <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <Nav.Link href="/login">Login</Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="/register">Register</Nav.Link>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
