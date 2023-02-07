import styled from "styled-components";

export const Drawer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background: ${(props) => props.theme["blue-600"]};

  svg {
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: #eea918;
    }
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      margin-bottom: 2rem;
      font-size: 1.4rem;
      font-weight: 300;
      transition: all 0.5s;
      color: ${(props) => props.theme.white};

      &:last-child {
        font-size: 1.2rem;
        background: #eea918;
        border-radius: 5px;
        padding: 0.4rem 0.8rem;
        font-weight: 400;
      }

      &:not(:last-child):hover {
        color: #eea918;
      }
    }
  }
`;
