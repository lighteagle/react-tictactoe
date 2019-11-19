import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

import styled from "styled-components";
import Game from "./components/Game";
// import NavBar from "./components/NavBar";
import Todo from "./components/Todo";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./components/Login";
import AuthButton from "./components/AuthButton";

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
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tictactoe">Tic Tac Toe </Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
            <AuthButton />
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          ini Homepage
        </Route>

        <PrivateRoute exact path="/tictactoe">
          <Wrapper light id="game-tic">
            <Header> My Tic-Tac-Toe</Header>
            <Game />
          </Wrapper>
        </PrivateRoute>
        <PrivateRoute exact path="/todo">
          <Wrapper light id="todo">
            <Header> My Todo's</Header>
            <Todo />
          </Wrapper>
        </PrivateRoute>
        <Route>
          <LoginPage />
        </Route>
      </Switch>
      <Section dark> Simple, Easy and Fun</Section>
    </BrowserRouter>
  );
}

export default App;
