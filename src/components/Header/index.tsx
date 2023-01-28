import { Phone, Envelope, Clock } from "phosphor-react";
import { HeadContainer, TopBar, NavigationContainer } from "./styles";

import EmcapLogo from "../../assets/logo-emcap.png";

export function Header() {
  return (
    <HeadContainer>
      <TopBar>
        <span>
          <Phone size={22} />
          (84) 99868-1388
        </span>
        <span>
          <Envelope size={22} />
          emcap@gmail.com
        </span>
        <span>
          <Clock size={22} />
          8:00 am - 17:00 pm
        </span>
      </TopBar>
      <NavigationContainer>
        <h2>Emcap JR</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Vantagens</a>
          <a href="#">Serviços</a>
          <a href="#">Consulte um especialista</a>
        </nav>
      </NavigationContainer>
    </HeadContainer>
  );
}
