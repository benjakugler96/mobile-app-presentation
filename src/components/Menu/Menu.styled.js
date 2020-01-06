import styled from "styled-components";

export const StyledMenuContainer = styled.div`
  background-color: ${({ theme }) => theme.opacity04};
  bottom: 0;
  position: absolute;
  top: 0;
  width: 100vw;
`;

/* This element is just so we can click outside the menu and it will close */
export const StyledMenuOpacity = styled.div`
  height: 100%;
  width: 59%;
`;

export const StyledMenu = styled.nav`
  background-color: ${({ theme }) => theme.light00};
  border-radius: 3px;
  border-radius: 80px 0 0 80px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 2rem;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
  width: 31.61%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-radius: 0;
    width: 100vw;
  }

  .menu-img {
    height: 60%;
    left: -190px;
    position: absolute;
    top: 20%;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 0;
      width: 0;
    }
  }

  .menu-title {
    border-bottom: 2px solid ${({ theme }) => theme.dark00};
    font-size: 36px;
    letter-spacing: 4px;
    line-height: 42px;
    padding: 22px;
    text-align: center;
    text-transform: uppercase;
  }

  .menu-footer {
    border-top: 1px solid ${({ theme }) => theme.light03};
    color: ${({ theme }) => theme.light02};
    font-size: 18px;
    line-height: 22px;
    padding-top 15px;
    text-align: center;
  }
`;
