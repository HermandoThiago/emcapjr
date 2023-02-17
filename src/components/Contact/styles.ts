import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  display: flex;
  text-align: center;

  padding: 7.5rem 0;
  background: #030f20;
  color: ${(props) => props.theme.white};

  #container {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    font-size: 2.2rem;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 1.8rem 1.2rem;

  div {
    width: 100%;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    label {
      margin-bottom: 0.8rem;
      color: #eea918;
      font-weight: 500;
      text-align: left;
    }

    input,
    textarea {
      margin-bottom: 0.8rem;
      border: 0;
      border-radius: 4px;
      font-weight: 300;
      padding: 0.8rem 1.2rem;
      background: ${(props) => props.theme.colors["gray-200"]};
    }

    input {
      height: 2.4rem;
    }

    textarea {
      height: 6.4rem;
      resize: none;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    padding: 1rem 0;
  }

  button {
    width: 100%;
    color: #fff;
    border-radius: 4px;
    border: 0;
    background: #eea918;
    padding: 0.4rem 1.4rem;
  }
`;
