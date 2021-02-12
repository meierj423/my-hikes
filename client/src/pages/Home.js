import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import JumbotronComp from "../components/Jumbotron";

class Home extends Component {
  render() {
    return (
      <Container>
        <JumbotronComp />
      </Container>
    );
  }
}

export default Home;
