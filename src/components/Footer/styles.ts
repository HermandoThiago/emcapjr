import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 4.2rem 2.8rem;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.colors.neutral};
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

  h4 {
    color: #eea918;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const About = styled.div`
  width: 22%;

  h4 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-weight: 300;
    margin-bottom: 0.8rem;
    text-align: justify;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;

  a {
    color: ${(props) => props.theme["blue-600"]};
  }
`;

export const Services = styled.div`
  width: 22%;
  text-align: left;

  h4 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  ul {
    list-style-position: inside;
  }

  li {
    margin-bottom: 0.4rem;
    font-weight: 300;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const Contact = styled.div`
  width: 22%;

  h4 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 0.4rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  padding: 1.2rem 1.2rem;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  background: ${(props) => props.theme["blue-600"]};
  color: ${(props) => props.theme.white};
`;
