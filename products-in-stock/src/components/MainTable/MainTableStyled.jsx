import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: 1rem 0;
  border: 0.2rem solid #333;
  border-radius: 1.5rem;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;

  & h2 {
    font-size: 2.4rem;
    color: rgb(8, 27, 4);
  }

  & button {
    background-color: rgb(8, 27, 4);
    color: #fff;
    padding: 1rem 2rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: bold;
    border: 0.1rem solid #333;
    border-radius: 1.2rem;
  }

  & button:focus {
    outline: .2rem solid #ff0;
  }
`;
