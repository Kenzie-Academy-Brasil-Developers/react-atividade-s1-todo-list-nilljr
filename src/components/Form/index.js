import { useState } from "react";

function Form({ addTodo }) {
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <input
        placeholder="Insira um item"
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => addTodo(userInput)}>Adicionar</button>
    </div>
  );
}

export default Form;
