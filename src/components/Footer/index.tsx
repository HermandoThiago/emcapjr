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
              Nossa missão é Prestar assessoria e consultoria na área contábil,
              com foco na excelência dos serviços prestados e satisfação dos
              clientes, bem como, desenvolver o acadêmico de Ciências Contábeis
              por meio de projetos e gestões.
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
              <li>Assessoria ao MEI</li>
              <li>Consultoria financeira</li>
              <li>Consultoria de custos e precificação</li>
              <li>Assessoria contábil</li>
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
