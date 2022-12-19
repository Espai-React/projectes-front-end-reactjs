import styled from "styled-components";

export const Container = styled.div`
  margin: 0.5rem;
  background: white;
  font-size: 1.2rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  border-radius: 0.5rem;

  .todo-item {
    flex: 1;
    padding: 0rem 0.5rem;
  }

  .completed {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .trash-btn,
  .complete-btn {
    background: ${(props) => props.theme.colors.taronja};
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .trash-btn {
    border-radius: 0 .5rem .5rem 0;
  }

  .complete-btn {
    background: ${(props) => props.theme.colors.turquesa};
  }

  .fa-trash,
  .fa-check {
    pointer-events: none;
  }

  /*   .fall {
    transform: translateY(10rem) rotateZ(20deg);
    opacity: 0;
  } */
`;
