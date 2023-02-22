import { List } from "phosphor-react";
import { Container } from "../Container";
import { HeadContainer, NavigationContainer, BurguerMenu } from "./styles";
import { useModalContext } from "../../contexts/Modal";
import { MobileDrawer } from "../MobileDrawer";
import logoEmcap from "../../assets/logo-emcap.png";

export function Header() {
  const { openDrawer } = useModalContext();

  const openDrawerMobile = () => openDrawer({ children: <MobileDrawer /> });

  return (
    <HeadContainer>
      <Container>
        <NavigationContainer>
          <div>
            <img src={logoEmcap} alt="" />
          </div>
          <nav>
            <a href="#">Home</a>
            <a href="#about">Sobre</a>
            <a href="#benefits">Vantagens</a>
            <a href="#services">Serviços</a>
            <a href="/encuc">Encuc 2023</a>
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
