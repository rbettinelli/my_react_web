import './App.css';
import React, { useState } from 'react';
import Container          from 'react-bootstrap/Container';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';
import Card               from 'react-bootstrap/Card';
import Button             from 'react-bootstrap/Button';


function NewsFeed() {
   // State
   const [apiNData, setNApiData] = useState({});
   
   // API
   const apiNKey = process.env.REACT_APP_NF_API_KEY;
   const apiNUrl = 'https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=10&category=technology';

   
   const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiNKey,
      'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
    }
  };
  
  const submitHandler = () => {
    console.log("Fetching");
    fetch(apiNUrl, options)
    .then(response => response.json())
	  .then((data) => {
      console.log('Success:', data);
      setNApiData(data);
    })
	  .catch(err => console.error(err))};


  return (
    <Container fluid>
      <br />
      <Card>
        <Card.Header><h3>NewsFeed</h3></Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <h3><Button className="btn btn-primary" onClick={submitHandler}>Get News</Button></h3>
            </Col>
          </Row>
          <Row>
            <Col>
              
              {apiNData.articles? (
                <Container>
                {apiNData.articles.map(article => (  
                  <>
                  <Card>
                    <Card.Header>{article.published_date}</Card.Header>
                    <Card.Body>{article.title}</Card.Body>
                    <Card.Footer><a href={article.url} target="_blank" rel="noreferrer">{article.url}</a></Card.Footer>
                  </Card>
                  <br />
                  </>
                ))}
                </Container>
            ) : (<h3>No News Loaded</h3>) 
            }
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
    </Container>
  );
}

export default NewsFeed;