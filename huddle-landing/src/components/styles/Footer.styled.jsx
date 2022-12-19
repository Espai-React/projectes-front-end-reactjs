import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    padding: 0;
    list-style: none;
    flex: 2;
  }

  ul:nth-of-type(2),
  ul:nth-of-type(3) {
    flex: 1;
  }

  ul li {
    margin-bottom: 10px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    ul {
      padding: 0;
    }

    p {
      text-align: center;
    }
  }
`;
