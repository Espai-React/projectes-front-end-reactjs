import {Container} from "./TodolistStyled";
import Todo from "../Todo/Todo";

const TodoList = ({ filteredTodos, handleComplete, handleTrash }) => (
  <Container>
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleComplete={handleComplete}
          handleTrash={handleTrash}
        />
      ))}
    </ul>
  </Container>
);

export default TodoList;
