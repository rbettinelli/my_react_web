import './App.css';
import React              from 'react';
import Container          from 'react-bootstrap/Container';
import Card               from 'react-bootstrap/Card';

function About() {
  return (
    <Container>
      <br />
      <Card>
        <Card.Header><h2>About</h2></Card.Header>
        <Card.Body>
          ** So this is V4.0 of this site.<br /><br />
          V1 - was a c# .NET Design (See link at bottom) It was designed using Visual Studio 2022, using MS-Sql.
          I thought a the time that that was the cats "*ss". But as versions go on we learn. <br /><br />
          V2 - was a new HTML with Css (a fresh start). What a pain but fast rendering no dynamic builds. <br /><br />
          V3 - was a new HTML with Bootstrap & CSS (a 2nd fresh start??). No.  Cleaner.  a slightly less pain. But still fast.
          I liked it.  But without sql or dynamic content its a non-starter. Lets move on.<br /><br />
          V4 - THIS VERSION.  React.  I didnt like it. Until I found myself building easily and quickly. I found it fun. Its component re-useabilty. Speed. 
          It can be linked to a backend sql (or something there-of.). Nice. I came. I saw. I built. I liked it.
          I just might replace my V1 with V4. Maybe.
        </Card.Body>
      </Card>
      <br />
    </Container>
  );
}

export default About;