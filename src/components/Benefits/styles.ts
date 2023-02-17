import styled from "styled-components";

export const BenefistContainer = styled.section`
  width: 100%;

  padding: 7.5rem 2.8rem;
  background: #030f20;
  color: ${(props) => props.theme.colors.neutral};

  h2 {
    font-size: 2.2rem;
    margin-bottom: 3.2rem;
    text-align: center;
    color: #eea918;
  }

  #container {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 7.5rem 1.2rem;
  }
`;

export const BenefitsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.8rem;
  gap: 1.2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 0;
    gap: 0;
  }
`;

export const BenefitsCard = styled.div`
  width: 30%;
  padding: 2.4rem 2.4rem;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.theme.colors["gray-200"]};
  transition: all 0.2s;

  &:hover {
    transform: translatey(-15px);
  }

  svg {
    margin-bottom: 0.8rem;
  }

  h3 {
    color: #eea918;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
    font-weight: 300;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    margin-bottom: 0.8rem;
    &:hover {
      transform: translatey(0);
    }
  }
`;
