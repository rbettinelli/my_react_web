import '../App.css';
import React, { useState, useEffect } from 'react';
import Container          from 'react-bootstrap/Container';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';
import Card               from 'react-bootstrap/Card';
import Form               from 'react-bootstrap/Form';
import Image              from 'react-bootstrap/Image';
import Button             from 'react-bootstrap/Button';
import InputGroup         from 'react-bootstrap/InputGroup';

function WeatherSet() {
  
  // State
  const [apiWData, setApiWData] = useState({});
  const [getState, setGetState] = useState('Toronto, Ontario, Canada');
  const [state, setState] = useState('Toronto, Ontario, Canada');
  const [error, setError] = useState(null);

  // API
  const apiWKey = process.env.REACT_APP_WS_API_KEY;
  const apiWUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiWKey}`;

  // Side effect
  useEffect(() => {
    fetch(apiWUrl)
      .then((res) => res.json())
      .then((data) => setApiWData(data));
      const fetchData = async () => {
        try {
          fetch(apiWUrl)
          .then((res) => res.json())
          .then((data) => setApiWData(data));
        } catch (err) {
          setError(err);
        } 
      };
    fetchData();}, [apiWUrl]
  );

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };
  
  const submitHandler = () => {
    setState(getState);
  };
  
  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <Container fluid>
      <br />
      <Card>
        <Card.Header><h3>Weather</h3></Card.Header>
        <Card.Body>
          <Row>
            <Col>
              {error && <p>Error: {error.message}</p>}
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="City Name"
                  aria-label="City Name"
                  aria-describedby="basic-addon2" 
                  onChange={inputHandler} 
                  value={getState} />
                <Button className="btn btn-primary" onClick={submitHandler}>Search</Button>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
            {apiWData.main ? (
              <Container>
                <h1>
                <Image src={`http://openweathermap.org/img/w/${apiWData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon" /></h1>
                <h3>{kelvinToFarenheit(apiWData.main.temp)}&deg; C</h3>
              </Container>
            ) : (
              <h3>Please Wait - Loading.</h3>
            )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default WeatherSet;