import styled from "styled-components";

export const Container = styled.div`
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .form-input,
  .form-button {
    padding: 0.8rem;
    font-size: 1.3rem;
    border: none;
    background: white;
    outline: none;
  }

  .form-input {
    border-radius: 0.5rem 0 0 0.5rem;
    width: 25rem;
  }

  .form-button {
    color: ${(props) => props.theme.colors.taronja};
    background: ${(props) => props.theme.colors.blanc};
    cursor: pointer;
    border-radius: 0 0.5rem 0.5rem 0;
    transition: all 0.3s ease;
  }

  .form-button:hover {
    background: ${(props) => props.theme.colors.taronja};
    color: white;
  }
`;

export const Select = styled.div`
  width: 10rem;
  height: 3.1rem;
  position: relative;

  &::after {
    content: "\u25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.82rem 0.9rem;
    border-radius: 0 0.5rem 0.5rem 0;
    background: ${(props) => props.theme.colors.taronja};
    pointer-events: none;
  }

  .filter-form {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0.6rem;
    color: ${(props) => props.theme.colors.taronja};
    cursor: pointer;
  }
`;
