import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme["blue-900"]}
    }

    :focus {
        outline: 0;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    body, input, textarea, button {
        font-weight: 500;
        font-size: 1rem;
    }

`;
