import styled from "styled-components";

export const HeadContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;
