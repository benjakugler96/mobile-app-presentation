import styled from "styled-components";

export const StyledRightMenuNav = styled.nav`
  ul {
    list-style: none;

    li {
      padding: 0;
      margin-top: 54px;
      cursor: pointer;

      a {
        color: ${({ theme }) => theme.dark00};
        font-size: 36px;
        line-height: 42px;
        text-decoration: none;

        @media (max-width: ${({ theme }) => theme.mobile}) {
          font-size: 1.5rem;
          text-align: center;
        }
      }
    }
  }
`;
