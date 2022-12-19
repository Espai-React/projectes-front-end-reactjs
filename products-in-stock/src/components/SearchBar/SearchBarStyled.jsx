import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  border: 0.2rem solid #333;
  border-radius: 1.5rem;
  padding: 2rem 3rem;

  & [type="text"] {
    width: 60%;
    padding: 0.5rem;
    border: 0.1rem solid #333;
    border-radius: 0.75rem;
  }

  & label {
    font-size: 1.5rem;
    color: rgb(8, 27, 4);
    font-weight: bold;
  }

  & [type="checkbox"] {
    margin: 0 0.5rem;
    width: 2rem;
    height: 1.8rem;
    border: 0.1rem solid red;
    border-radius: 0.75rem;
  }
`;
