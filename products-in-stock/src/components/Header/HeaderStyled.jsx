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
    color: rgb(8, 27, 4)
  }

  & ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  & .link {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: bold;
    color: rgb(8, 27, 4);
  }
`;
