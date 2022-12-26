import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  align-self: last baseline;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;

  li {
    list-style: none;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-self: initial;
    margin-bottom: 10px;
  }
`;
