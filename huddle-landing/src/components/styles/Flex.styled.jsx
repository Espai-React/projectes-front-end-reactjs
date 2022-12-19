import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  gap: ${({ gap }) => gap || 0};

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
