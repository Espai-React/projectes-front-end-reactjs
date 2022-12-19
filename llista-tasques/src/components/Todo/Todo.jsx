import {Container} from "./TodoStyled";

const Todo = ({todo: {id, text, completed, fall }, handleComplete, handleTrash }) => (
  <Container>
    <li className={`todo-item ${completed && "completed"} ${fall && "fall"}`}>{text}</li>
    <button className="complete-btn" id={id} onClick={handleComplete}>
      <i className="fas fa-check"></i>
    </button>
    <button className="trash-btn" id={id}  onClick={handleTrash}>
      <i className="fas fa-trash"></i>
    </button>
  </Container>
);

export default Todo;
