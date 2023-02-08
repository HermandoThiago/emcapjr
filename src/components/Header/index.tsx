import { List } from "phosphor-react";
import { Container } from "../Container";
import { HeadContainer, NavigationContainer, BurguerMenu } from "./styles";
import { useModalContext } from "../../contexts/Modal";
import { MobileDrawer } from "../MobileDrawer";

export function Header() {
  const { openDrawer } = useModalContext();

  const openDrawerMobile = () => openDrawer({ children: <MobileDrawer /> });

  return (
    <HeadContainer>
      <Container>
        <NavigationContainer>
          <h2>EMCAP JR</h2>
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
      </Container>
    </HeadContainer>
  );
}
