import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  Envelope,
  Phone,
  MapPin,
} from "phosphor-react";
import {
  FooterContainer,
  FooterWrapper,
  About,
  SocialIcons,
  Services,
  Contact,
  InfoContainer,
} from "./styles";

export function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <About>
            <h4>Emcap Jr</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <SocialIcons>
              <a href="">
                <FacebookLogo size={30} />
              </a>
              <a href="">
                <InstagramLogo size={30} />
              </a>
              <a href="">
                <WhatsappLogo size={30} />
              </a>
            </SocialIcons>
          </About>
          <Services>
            <h4>Serviços</h4>
            <ul>
              <li>Imposto de renda</li>
              <li>Abertura de MEIs</li>
              <li>Gestão Financeira</li>
              <li>Análise Gerencial</li>
            </ul>
          </Services>
          <Contact>
            <h4>Contato</h4>
            <ul>
              <li>
                <Envelope size={20} />
                hermando2013@gmail.com
              </li>
              <li>
                <Phone size={20} />
                (84) 99868-1388
              </li>
              <li>
                <MapPin size={20} />
                Patu / RN
              </li>
            </ul>
          </Contact>
        </FooterWrapper>
      </FooterContainer>
      <InfoContainer>
        <span>Emcap Jr - Consultoria Contábil</span>
      </InfoContainer>
    </>
  );
}
