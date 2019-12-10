import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import styled from "styled-components";
import Navbar from "./components/NavBar";
import Game from "./components/Game";
import Todo from "./components/Todo";
import RestApi from "./components/RestApi";
import PostDetail from "./components/PostDetail";
import PrivateRoute from "./components/PrivateRoute";
import AddNewPost from "./components/AddNewPost";
import Counter from "./components/Counter";
import HookTodo from "./components/HookTodo";

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
      <Navbar />

      <div></div>

      <Switch>
        <Route exact path="/">
          <div className="home-page"></div>
        </Route>

        <Route path="/hook-todo">
          <Wrapper light id="game-tic">
            <Header> Learn Hook Todo</Header>
            <HookTodo />
          </Wrapper>
        </Route>
        <Route path="/counter">
          <Wrapper light id="game-tic">
            <Header> Learn counter</Header>
            <Counter />
          </Wrapper>
        </Route>

        <Route path="/rest-api">
          <Wrapper light id="game-tic">
            <Header> Learn REST API</Header>
            <RestApi />
          </Wrapper>
        </Route>

        <Route path="/post-detail/:id">
          <Wrapper light id="game-tic">
            <Header> Learn REST API</Header>
            <PostDetail />
          </Wrapper>
        </Route>

        <Route path="/add-new-post">
          <Wrapper light id="game-tic">
            <Header> Learn REST API</Header>
            <AddNewPost />
          </Wrapper>
        </Route>

        <PrivateRoute path="/tictactoe">
          <Wrapper light id="game-tic">
            <Header> My Tic-Tac-Toe</Header>
            <Game />
          </Wrapper>
        </PrivateRoute>
        <PrivateRoute path="/todo">
          <Wrapper light id="todo">
            <Header> My Todos</Header>
            <Todo />
          </Wrapper>
        </PrivateRoute>
      </Switch>
      <Section dark> Simple, Easy and Fun</Section>
    </BrowserRouter>
  );
}

export default App;
