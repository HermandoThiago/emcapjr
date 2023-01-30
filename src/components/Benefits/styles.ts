import styled from "styled-components";

export const BenefistContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 7.5rem 2.8rem;
  color: ${(props) => props.theme.white};

  h2 {
    font-size: 2.2rem;
    margin-bottom: 3.2rem;
  }
`;

export const BenefitsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.8rem;
`;

export const BenefitsCard = styled.div`
  width: 32%;
  padding: 2.4rem 2.4rem;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.theme["blue-600"]};

  svg {
    margin-bottom: 0.8rem;
  }

  h3 {
    color: #eea918;
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300;
  }
`;
