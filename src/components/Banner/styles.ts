import styled from "styled-components";
import emcapBanner from "../../assets/banner-emcap.png";

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

    opacity: 0.2;

    background-image: url(${emcapBanner});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

    filter: grayscale(100%);
  }

  p {
    margin-bottom: 0.8rem;
    font-weight: 300;
    z-index: 3;
  }

  p:first-child {
    font-size: 1.5rem;
    font-weight: 500;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    max-width: 700px;
    margin-bottom: 1.2rem;
    color: #eea918;
    z-index: 3;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    z-index: 3;

    color: ${(props) => props.theme.white};
    background: #eea918;
    margin-top: 1.2rem;
    padding: 0.8rem 1rem;
    border-radius: 24px;
    cursor: pointer !important;
  }

  color: ${(props) => props.theme.white};
`;
