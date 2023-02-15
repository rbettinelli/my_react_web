import '../App.css';
import React              from 'react';
import Container          from 'react-bootstrap/Container';
import Row                from 'react-bootstrap/Row';
import Col                from 'react-bootstrap/Col';
import Card               from 'react-bootstrap/Card';
import Image              from 'react-bootstrap/Image';

function Home() {
  return (
    <Container>
      <br />
      <Card>
        <Card.Header><h3>My Bio!</h3></Card.Header>
        <Card.Body>
          <Row>
            <Col><Image src={"images/rb.jpg"} alt="pic" rounded="true" fluid="true" /></Col>
            <Col><span className="LGR">R</span>obert currently holds the position of Information Management and Technology Specialist at NVCA. 
                            With 4.5 years experience with NVCA and 20+ years experience in IT including positions such as Systems Administrator, Developer, Tier 1 Tech Support and Teacher.  
                            He has successfully designed from the ground up turnkey systems including hardware level, application architecture requirements and application development. 
                            Also has an extensive knowledge of operating systems spanning decades including multiplatform (PC, Mac, Linux, Android and Apple OS). Although is critically acclaimed when 7 years of age successfully programming the Commodore Vic-20 to have a stick man do jumping jacks.
                            <br /></Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header><h3>My Favourite Mobile App/Game - Clash Royal</h3></Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <a href="https://clashroyale.com/">
                <Image src="images/clashscreen.jpg" alt="pic" rounded="true" fluid="true" />
              </a>
            </Col>
            <Col> Clash Royale is a mobile strategy game developed by Supercell. 
                            The game combines elements of tower defense, collectible card games, and multiplayer online battle arena (MOBA) games. 
                            Players collect and upgrade cards featuring different troops, spells, and defenses, and use them to battle against opponents in real-time multiplayer battles.<br />
                            <br />
                            I believe it is a great game due to is its strategic depth. 
                            The game's card collection and deck-building mechanics are really cool and allow for a wide variety of playstyles, and players must constantly adapt their strategy to counter others decks. 
                            Additionally, the game's real-time multiplayer battles create a fast-paced and exciting gaming experience which I play with my eldest son. 
                            The game also frequently receives updates and new content, keeping the game fresh and interesting for players.<br />
                            <br />
                            On a final note, it can be a play to win game witch is one of its biggest problems.  I have been playing for 6 years now and still haven't spent a dime on it. 
                            So I guess I loose alot. :-) 
            </Col>
          </Row>

        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Header><h3>Our Class - 23W Mobile Web Applications</h3></Card.Header>
        <Card.Body>
          <Row>
            <Col><Image src="images/class.jpg" alt="pic" rounded="true" fluid="true"/></Col>
            <Col> Although I have a deep background; I look forward to learning new things that I can apply to my everyday tasks.
                            I can take any new things; or even finding something that works better than I am currenly utalizing.
                            I love computers and I love to add to what I know. 
                            I look forward to that. </Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
    </Container>
            
  )
}

export default Home;