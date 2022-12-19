import { Container, Select} from "./FormStyled";

const Form = ({ inputText, setInputText, submitTodoHandler, setSelect }) => {
  return (
    <Container>
      <div>
        <input
          type="text"
          className="form-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="form-button" type="submit" onClick={submitTodoHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <Select>
        <select
          name="forms"
          className="filter-form"
          onChange={(e) => setSelect(e.target.value)}>
          <option value="all">Totes</option>
          <option value="completed">Complertes</option>
          <option value="uncompleted">Incomplertes</option>
        </select>
      </Select>
    </Container>
  );
};

export default Form;
