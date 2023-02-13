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
              <a href="https://www.facebook.com/emcapjr" target="_blank">
                <FacebookLogo size={30} />
              </a>
              <a
                href="https://www.instagram.com/emcapjr/?hl=pt"
                target="_blank"
              >
                <InstagramLogo size={30} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5584996036572"
                target="_blank"
              >
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
                emcapjr@gmail.com
              </li>
              <li>
                <Phone size={20} />
                (84) 99603-6572
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
