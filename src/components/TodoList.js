import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const deletingCompleted = () => {
    setTodos(todos.filter((el) => el.completed !== true));
  };
  const clearAll = () => {
    setTodos([]);
  };
  return (
    <>
      <div className="btn">
        <button className="cl" onClick={clearAll}>
          Clear All!
        </button>
        <button className="cl-comp" onClick={deletingCompleted}>
          Clear Completed!
        </button>
      </div>

      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <Todo
              todo={todo}
              key={index}
              id={todo.key}
              setTodos={setTodos}
              todos={todos}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
