import styled from "styled-components";

export const HeadContainer = styled.header`
  max-width: 100%;
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 10;

  background: ${(props) => props.theme.white};

  #container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: static;
  }
`;

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  background: ${(props) => props.theme.white};
  padding: 1.4rem 0;
  color: ${(props) => props.theme["blue-600"]};

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
      color: ${(props) => props.theme.colors.neutral};
      font-weight: 400;
    }

    a:last-child {
      color: ${(props) => props.theme.white};
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
