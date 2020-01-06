import styled from "styled-components";

export const IconStyledContainer = styled.div`
  height: 60px;
  width: 60px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
