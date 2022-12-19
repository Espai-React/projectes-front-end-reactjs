import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { THEME } from "./lib/constants/theme";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import Form from "./components/Form/Form";
import TodoList from "./components/Todolist/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );
  const [select, setSelect] = useState("all");

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          id: Math.round(Math.random() * 100),
          text: inputText,
          completed: false,
        },
      ]);
      setInputText("");
    } else {
      alert("No envieu text buit");
    }
  };

  const handleComplete = (e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === +e.target.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleTrash = (e) => {
    setTodos(todos.filter((todo) => todo.id !== +e.target.id));
  };

  const handleFilter = () => {
    switch (select) {
      case "completed":
        return [...todos].filter((todo) => todo.completed === true);
      case "uncompleted":
        return [...todos].filter((todo) => todo.completed === false);
      default:
        return todos;
    }
  };
  const filteredTodos = handleFilter();

  /*  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null)
        localStorage.setItem("todos", JSON.stringify([]));
      else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  }, []);  */

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos]);

  return (
    <div className="App">
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <header
          style={{
            height: "20vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            fontSize: "1.5rem",
            marginTop: "2rem",
          }}>
          <h1>Llista de Tasques</h1>
        </header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          submitTodoHandler={submitTodoHandler}
          setSelect={setSelect}
        />
        <TodoList
          filteredTodos={filteredTodos}
          handleComplete={handleComplete}
          handleTrash={handleTrash}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
