import '../App.css';
import React              from 'react';
import Container          from 'react-bootstrap/Container';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className="header">
      <br />
      <Row>
        <Col>
        Social Sites :
        </Col>
        <Col className="text-end">
          <a className="btn btn-info btn-sm" href="mailto:rbettinelli@gmail.com">GMail</a>&nbsp;
          <a className="btn btn-info btn-sm" href="https://instagram.com/rTron1z">Instagram</a>&nbsp;
          <a className="btn btn-info btn-sm" href="https://www.linkedin.com/in/robert-bettinelli/">LinkdIn</a>&nbsp;
          <a className="btn btn-info btn-sm" href="https://github.com/rbettinelli">GitHub</a>&nbsp;
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="text-center">
          <h4><a className="btn btn-info" href="https://bettinelli.ca">(.Net Version) bettinelli.ca</a></h4>
          Barrie, Ontario, Canada<br />
          705-719-8442<br />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h6>bettinelli.ca - 2023</h6>
        </Col>
      </Row>
    </Container>
  );
}


export default Footer;
