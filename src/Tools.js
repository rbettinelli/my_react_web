import './App.css';
import React              from 'react';
import Container          from 'react-bootstrap/Container';
import WeatherSet         from './WeatherSet';
import NewsFeed           from './NewsFeed';

function Tools() {
  
  return (
    <Container>
        <WeatherSet />
        <NewsFeed />
    </Container>
  );
}

export default Tools;