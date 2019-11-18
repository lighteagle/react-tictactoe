import React from "react";
import "./App.css";

import styled from "styled-components";
import Game from "./components/Game";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";

const Header = styled.h1`
  text-align: center;
  background: #000;
  color: #fff;
  margin-bottom: 20px;

  font-family: "Damion", cursive;
`;

const Wrapper = styled.section`
  text-align: center;
  padding-top: 75px;
  background: ${props => (props.dark ? "#000" : "#aaa")};
  min-height: 100vh;
  position: relative;
`;

const Section = styled(Wrapper)`
  color: white;
  min-height: 8px;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0;
`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Wrapper light id="game-tic">
        <Header> My Tic-Tac-Toe</Header>
        <Game />
      </Wrapper>
      <Wrapper light id="todo">
        <Header> My Todo's</Header>
        <Todo />
      </Wrapper>

      <Section dark> Simple, Easy and Fun</Section>
    </div>
  );
}

export default App;
