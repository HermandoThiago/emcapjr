import styled from "styled-components";

export const HeadContainer = styled.header`
  max-width: 100%;
  width: 100%;
  position: fixed;
  z-index: 5;

  #container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  background: ${(props) => props.theme["blue-900"]};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: static;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  padding: 0.8rem;

  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  background-color: ${(props) => props.theme["blue-900"]};
  color: ${(props) => props.theme.white};

  font-weight: 300;
  font-size: 0.8125rem;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  background: ${(props) => props.theme["blue-600"]};
  padding: 1.4rem 0.8rem;
  color: ${(props) => props.theme.white};

  h2 {
    cursor: pointer;
  }

  nav {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;

    a {
      color: ${(props) => props.theme.white};
      font-weight: 300;
    }

    a:last-child {
      background: #eea918;
      border-radius: 5px;
      padding: 0.4rem 0.8rem;
      font-weight: 500;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    nav {
      display: none;
    }
  }
`;

export const BurguerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
