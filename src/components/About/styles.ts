import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["blue-600"]};
`;

export const Content = styled.div`
  width: 50%;
  padding: 1.4rem 1.8rem;

  p:first-child {
    font-size: 1.2rem;
    font-weight: 300;
    color: ${(props) => props.theme["yellow-300"]};
    margin-bottom: 0.85rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.85rem;
    text-align: justify;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.85rem;
  }

  button {
    background: #eea918;
    border: 0;
    border-radius: 5px;
    padding: 0.4rem 0.8rem;
    color: ${(props) => props.theme.white};
    font-weight: 500;
  }
`;

export const ImagePresentation = styled.div``;
