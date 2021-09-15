import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodo(removedTodo) {
    const filteredList = todos.filter((element) => element !== removedTodo);
  }

  return (
    <div className="App">
      <Form
        addTodo={addTodo}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <TodoList todos={todos} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
