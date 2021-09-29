function TodoList({ todos, handleTodo }) {
  return (
    <div>
      {todos.map((element) => (
        <div className="item">
          <span>{element}</span>
          <button className="conclude" onClick={() => handleTodo(element)}>
            Concluir
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
