import React from "react";

function HookTodo() {
  const [todos, setTodos] = React.useState([]);
  const [todoValue, setTodoValue] = React.useState("");
  const handleTodoValueChange = event => {
    setTodoValue(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        todoValue,
        isCompleted: false
      }
    ]);
    setTodoValue("");
  };
  return (
    <div style={{ textAlign: "center", fontSize: 20 }}>
      <h1>Todo List</h1>
      <form>
        <div>
          <label htmlFor="todo">What are you gonna do with your life?</label>
          <input
            type="text"
            name="todo"
            value={todoValue}
            onChange={handleTodoValueChange}
          />
        </div>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos &&
            todos.map((data, index) => <li key={index}>{data.todoValue}</li>)}
        </ul>
      </form>
    </div>
  );
}

export default HookTodo;
