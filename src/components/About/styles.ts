import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  padding: 2.8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["blue-600"]};
`;

export const Content = styled.div`
  width: 50%;
  padding: 0.8rem 1.8rem;

  p {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.85rem;
    text-align: justify;
  }

  p:first-child {
    font-size: 1.2rem;
    font-weight: 300;
    color: ${(props) => props.theme["yellow-300"]};
    margin-bottom: 0.85rem;
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

export const ImagePresentation = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 7.5rem 1.8rem;

  img {
    max-width: 100%;
    z-index: 2;
  }
`;

const Form = styled.div`
  background: #022249;
  opacity: 0.5;
  position: absolute;
`;

export const Circle = styled(Form)`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  z-index: 3;

  left: 40px;
  top: 35px;
`;

export const Rectangle = styled(Form)`
  width: 295px;
  height: 244px;
  border-radius: 8px;
  z-index: 1;

  right: 40px;
  bottom: 35px;
`;
