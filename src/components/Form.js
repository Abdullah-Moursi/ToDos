import React from "react";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const todosHandler = (e) => {
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        key: Math.floor(Math.random() * 1000),
      },
    ]);
    e.preventDefault();
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        maxLength="80"
        onChange={inputHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />

      <button onClick={todosHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
