import '../App.css';
import React              from 'react';
import { Route, Routes }  from "react-router-dom";
import Home               from "../pages/Home";
import Tools              from "../pages/Tools";
import Services           from "../pages/Services";
import About              from "../pages/About";
import {LinkContainer}    from 'react-router-bootstrap';
import {Nav, Navbar}      from 'react-bootstrap';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';

function Navigator() {

  return (
    <>
    <Row>
      <Col>
        <Navbar color="white" bg="dark" variant="dark" expand="lg" sticky="top">
          <LinkContainer to="/">
            <Navbar.Brand>&nbsp;&nbsp;Nav System</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/tools">
                <Nav.Link>Tools</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
  
    </>
  );
}

export default Navigator;
