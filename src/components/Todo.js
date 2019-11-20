import React, { Component } from "react";

import { Alert, Form, FormGroup, Label, Input } from "reactstrap";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
      error: "",
      isEdit: false
    };
  }
  handleTodoInput = event => {
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
    todosObj["id"] = todos.length ? todos[todos.length - 1].id + 1 : 0;
    todosObj["todo"] = this.state.inputValue;
    todosObj["status"] = false;

    todos.push(todosObj);
    this.setState({ todos, inputValue: "", error: "" });
    console.table(todos);
  };

  handleTodoDelete = event => {
    event.preventDefault();
    const todos = this.state.todos.filter(
      x => x.id !== parseInt(event.target.id)
    );
    this.setState({ todos });
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
                    {data.todo}{" "}
                  </Label>
                  <button id={data.id} onClick={this.handleTodoDelete}>
                    {" "}
                    Delete{" "}
                  </button>
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
