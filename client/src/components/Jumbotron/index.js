import React from "react";
import { Jumbotron, Container } from "react-bootstrap/";
import "./style.css";

function JumbotronComp() {
  return (
    <Jumbotron fluid>
      <Container>
        <div className="jumbotron-text">
          <h1>My Hikes</h1>
          <p>Search, save, and plan your next hike here</p>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronComp;
;
