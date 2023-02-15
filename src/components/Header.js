import '../App.css';
import React              from 'react';
import Container          from 'react-bootstrap/Container';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';

function Header() {
  return (
   
    <Container fluid className="header">
      <Row>
        <Col sm={2}>
          <img src="images/rb.jpg" alt="roberts family" className="headerimg" />
        </Col>
        <Col>
          <br /><h1>Robert Bettinelli</h1>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Header;
