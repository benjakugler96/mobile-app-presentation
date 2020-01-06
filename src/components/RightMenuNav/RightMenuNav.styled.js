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
      a:hover {
        background: linear-gradient(150.35deg, #009fe9 15.81%, #ff3df4 87.73%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;
