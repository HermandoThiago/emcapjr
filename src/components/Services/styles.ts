import styled from "styled-components";

export const ServicesContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7.5rem 2.8rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["blue-600"]};

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
  }

  p:nth-child(3) {
    margin-bottom: 1.4rem;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 0.8rem;
`;

export const ServicesCard = styled.div`
  width: 22%;
  text-align: center;
  padding: 2.4rem 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgba(2, 34, 73, 0.3);
  box-shadow: 5px 5px 20px rgb(2, 34, 73, 0.3);

  svg {
    margin-bottom: 0.8rem;
  }

  p {
    color: #eea918;
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
`;
