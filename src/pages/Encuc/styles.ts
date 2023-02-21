import styled from "styled-components";
import encucBanner from "../../assets/encuc-banner.jpeg";

export const HeadContainer = styled.header`
  max-width: 100%;
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 10;

  background: ${(props) => props.theme.white};

  #container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: static;
  }
`;

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  background: ${(props) => props.theme.white};
  padding: 1.4rem 0;
  color: ${(props) => props.theme["blue-600"]};

  div {
    cursor: pointer;
    width: 190px;

    img {
      max-width: 100%;
    }
  }

  nav {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;

    a {
      color: ${(props) => props.theme.colors.neutral};
      font-weight: 400;
    }

    a:last-child {
      color: ${(props) => props.theme.white};
      background: #eea918;
      border-radius: 5px;
      padding: 0.4rem 0.8rem;
      font-weight: 500;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    nav {
      display: none;
    }
  }
`;

export const BurguerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 12rem 2rem;
  position: relative;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 2;

    opacity: 0.3;

    background-image: url(${encucBanner});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  p {
    margin-bottom: 0.8rem;
    font-weight: 300;
    z-index: 3;
    width: 80%;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    max-width: 700px;
    margin-bottom: 1.2rem;
    color: #eea918;
    z-index: 3;
  }

  color: ${(props) => props.theme.white};
`;

export const ProgrammingContainer = styled.section`
  width: 100%;
  padding: 7.5rem 2.8rem;

  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.colors.neutral};
`;

export const ProgrammingWrapper = styled.div`
  h2 {
    color: #eea918;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.8rem;
  }

  h3 {
    color: #eea918;
    margin-bottom: 0.8rem;
  }

  #inscricao,
  #trabalhos,
  #eventos,
  #minicursos,
  #palestras {
    margin-bottom: 1.2rem;

    div {
      margin-bottom: 0.8rem;

      p {
        margin-bottom: 0.2rem;
      }

      p:first-child {
        font-weight: bold;
      }
    }
  }
`;

export const MinicursosContainer = styled.section`
  width: 100%;

  padding: 7.5rem 2.8rem;
  background: #030f20;
  color: ${(props) => props.theme.colors.neutral};

  h2 {
    color: #eea918;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.8rem;
  }
`;

export const MinicurosWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  flex-direction: row;
  padding: 0.8rem;
  gap: 1.2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 0;
    gap: 0;
  }
`;

export const MinicursoCard = styled.div`
  width: 30%;
  height: 430px;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  background: ${(props) => props.theme.colors["gray-200"]};
  transition: all 0.2s;

  div {
    width: 100%;
    padding: 1.2rem 0.8rem;

    img {
      max-width: 100%;
      max-height: 150px;
    }

    p {
      margin-bottom: 0.8rem;
      font-size: 1.1rem;
    }
  }

  &:hover {
    transform: translatey(-15px);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    margin-bottom: 0.8rem;

    &:hover {
      transform: translatey(0);
    }
  }
`;

export interface ImageProps {
  img: string;
}

export const ImageDrop = styled.div<ImageProps>`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;
