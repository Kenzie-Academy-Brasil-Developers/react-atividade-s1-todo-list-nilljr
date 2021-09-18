import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
    console.log(todos);
  }

  function handleTodo(todo) {
    setTodos(todos.filter((element) => element !== todo));
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
