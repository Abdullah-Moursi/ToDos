import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
    filtering();
  }, [todos, status]);

  const filtering = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((el) => el.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    const data = localStorage.getItem("todos");
    data ? setTodos(JSON.parse(data)) :
    setTodos([])
  };

  return (
    <>
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>

        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />

        {todos.length === 0 ? (
          <h2>GET IT DONE!</h2>
        ) : (
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
          />
        )}
      </div>
    </>
  );
}

export default App;
