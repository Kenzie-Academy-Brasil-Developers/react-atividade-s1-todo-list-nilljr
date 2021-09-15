function Form({ addTodo, userInput, setUserInput }) {
  return (
    <form>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => addTodo(userInput)}>Adicionar tarefa</button>
    </form>
  );
}

export default Form;
