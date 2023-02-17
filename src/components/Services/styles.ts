import styled from "styled-components";

export const ServicesContainer = styled.section`
  width: 100%;
  display: flex;

  padding: 7.5rem 2.8rem;
  color: ${(props) => props.theme.colors.neutral};
  background-color: ${(props) => props.theme.white};

  #container {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
    color: #eea918;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
  }

  p:nth-child(3) {
    margin-bottom: 3.2rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    text-align: center;
    padding: 7.5rem 1.2rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.8rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const ServicesCard = styled.div`
  width: 22%;
  text-align: center;
  padding: 2.4rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors["gray-200"]};
  box-shadow: 5px 5px 20px rgb(2, 34, 73, 0.1);
  transition: all 0.2s;

  &:hover {
    transform: translatey(-15px);
  }

  svg {
    margin-bottom: 0.8rem;
  }

  p {
    color: ${(props) => props.theme.colors.neutral};
    margin-bottom: 1.8rem;
    font-weight: 700;
    font-size: 1.3rem;
  }

  a {
    background: #eea918;
    color: ${(props) => props.theme.white};
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    margin-bottom: 0.8rem;
    &:hover {
      transform: translatey(0);
    }
  }
`;
