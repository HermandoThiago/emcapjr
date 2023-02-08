import { Phone, Envelope, Clock, List } from "phosphor-react";
import { HeadContainer, NavigationContainer, BurguerMenu } from "./styles";
import { useModalContext } from "../../contexts/Modal";
import { MobileDrawer } from "../MobileDrawer";

export function Header() {
  const { openDrawer } = useModalContext();

  const openDrawerMobile = () => openDrawer({ children: <MobileDrawer /> });

  return (
    <HeadContainer>
      <NavigationContainer>
        <h2>Emcap JR</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#about">Sobre</a>
          <a href="#benefits">Vantagens</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Consulte um especialista</a>
        </nav>
        <BurguerMenu>
          <List size={22} onClick={openDrawerMobile} />
        </BurguerMenu>
      </NavigationContainer>
    </HeadContainer>
  );
}
