import React, { Component } from "react";

import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
      error: ""
    };
  }
  handleTodoInput = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleTodoButton = event => {
    event.preventDefault();
    if (this.state.inputValue === "") {
      this.setState({ error: "input tidak boleh kosong" });
      return;
    }

    const todos = this.state.todos.slice();
    const todosObj = {};
    todosObj["id"] = this.state.todos.length + 1;
    todosObj["todo"] = this.state.inputValue;
    todosObj["status"] = false;

    todos.push(todosObj);
    this.setState({ todos, inputValue: "", error: "" });
  };

  render() {
    return (
      <div>
        {this.state.error && <Alert color="warning">{this.state.error}</Alert>}
        <Form onSubmit={this.handleTodoButton} style={{ padding: "5px" }}>
          <input
            type="text"
            name="inputValue"
            value={this.state.inputValue}
            onChange={this.handleTodoInput}
          />
          <button>Add Todo</button>
        </Form>
        <div>
          <ul>
            {this.state.todos.map((data, index) => (
              <li key={index}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />
                    {data.todo}
                  </Label>
                </FormGroup>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
