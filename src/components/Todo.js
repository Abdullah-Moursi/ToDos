const Todo = ({ text, todo, id, setTodos, todos }) => {
  const deleting = () => {
    setTodos(todos.filter((el) => el.key !== id));
  };

  const completing = () => {
    setTodos(
      todos.map((el) => {
        if (el.key === id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  const motivate = () => {
    id % 2 === 0
      ? alert("YOU'RE DOING GREAT!")
      : id % 5 === 0
      ? alert("KEEP IT GOING!")
      : alert("YOU CAN DO IT!");
  };

  return (
    <>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text ? text : "STOP PROCRANSTINATING" }
        </li>
        <button onClick={completing} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleting} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
        <button className="mot" onClick={motivate}>
          <i className="fas fa-praying-hands"></i>
        </button>
      </div>
    </>
  );
};

export default Todo;
