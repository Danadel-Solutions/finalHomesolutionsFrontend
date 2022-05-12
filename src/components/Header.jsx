import React from "react";
import { Container, Navbar, Nav, Row, Button } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="navigation py-3" collapseOnSelect expand="lg">
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand className="logo" href="#home">
              <img src={logo} alt="" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">For Sale</Nav.Link>
              <Nav.Link href="#link">For Rent</Nav.Link>
              <Nav.Link href="#link">Shortlet</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Agents</Nav.Link>
              <LinkContainer to={"/login"}>
                <Nav.Link className="btn post-btn" href="#link">
                  Post for FREE
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
