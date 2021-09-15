function TodoList({ todos, handleTodo }) {
  return (
    <div>
      {todos.map((element) => (
        <div>
          <span>{element}</span>
          <button onClick={() => handleTodo(element)}>Concluir tarefa</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
