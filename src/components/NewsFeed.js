import '../App.css';
import React, { useState, useEffect } from 'react';
import Container          from 'react-bootstrap/Container';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';
import Card               from 'react-bootstrap/Card';

function NewsFeed() {
   // State
   const [apiNData, setNApiData] = useState({});
   const [error, setError] = useState(null);
  
   // API
   const apiNUrl = 'https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=10&category=technology';

  useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_NF_API_KEY,
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
      }};
      const fetchData = async () => {
        try {
          fetch(apiNUrl, options)
          .then((res) => res.json())
          .then((data) => setNApiData(data));
        } catch (err) {
          setError(err);
        } 
      };
      fetchData();
    }, []);

  return (
    <Container fluid>
      <br />
      <Card>
        <Card.Header><h3>NewsFeed</h3></Card.Header>
        <Card.Body>
          <Row>
            <Col>
              {error && <p>Error: {error.message}</p>}
            </Col>
          </Row>
          <Row>
            <Col>
              {apiNData.articles? (
                <Container>
                {apiNData.articles.map((article, index)=>(  
                  <div key={index}>
                  <Card>
                    <Card.Header>{article.published_date}</Card.Header>
                    <Card.Body>{article.title}</Card.Body>
                    <Card.Footer><a href={article.url} target="_blank" rel="noreferrer">{article.url}</a></Card.Footer>
                  </Card>
                  <br />
                  </div>
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