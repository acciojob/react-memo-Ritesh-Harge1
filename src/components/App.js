import React, { useState, useMemo } from "react";
import TodoList from "./TodoList";
import Counter from "./Counter";

function App() {
  // State for todos and input
  const [todos, setTodos] = useState(["Learn React", "Build App"]);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  // Add a new default todo
  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  // Add custom todo if valid
  const addCustomTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  // Increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Memoized todos count for performance
  const todosCount = useMemo(() => {
    console.log("Calculating todos count...");
    return todos.length;
  }, [todos]);

  return (
    <div className="app">
      <h1>Task Management App with React Memo</h1>

      {/* Counter Section */}
      <Counter counter={counter} increment={incrementCounter} />

      {/* Add Todos */}
      <button onClick={addTodo}>Add Todo</button>
      <input
        type="text"
        value={input}
        placeholder="Enter custom task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addCustomTodo}>Submit</button>

      {/* Display Todos */}
      <TodoList todos={todos} todosCount={todosCount} />
    </div>
  );
}

export default App;


