import styled from "styled-components";

export const TopBarContainer = styled.div`
  width: 100%;
  padding: 0.8rem;

  #container {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }

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
