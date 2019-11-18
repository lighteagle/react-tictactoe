import React from "react";
import "./App.css";

import styled from "styled-components";
import Game from "./components/Game";
import NavBar from "./components/NavBar";

const Header = styled.h1`
  text-align: center;
  background: #000;
  color: #fff;
  margin-bottom: 20px;
`;

const Wrapper = styled.section`
  text-align: center;
  padding: 1em;
  background: ${props => (props.dark ? "#333" : "#aaa")};
  min-height: 80vh;
`;

const Section = styled(Wrapper)`
  color: white;
  min-height: 10vh;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Wrapper light>
        <Header> My TicTacToe</Header>
        <Game />
      </Wrapper>
      <Section dark> Simple, Easy and Fun</Section>
    </div>
  );
}

export default App;
