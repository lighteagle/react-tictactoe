import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  const setToZero = () => setCount(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }
  return (
    <div style={{ textAlign: "center", fontSize: 20 }}>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={setToZero}>Reset</button>
    </div>
  );
}

export default Counter;
