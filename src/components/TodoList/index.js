function TodoList({ todos, handleTodo }) {
  return (
    <div>
      {todos.map((element) => (
        <div>
          <span>{element}</span>
          <button onClick={() => handleTodo(element)}>Concluir</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
