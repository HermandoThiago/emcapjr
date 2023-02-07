import { X } from "phosphor-react";
import { Drawer } from "./styles";
import { useModalContext } from "../../contexts/Modal";

export function MobileDrawer() {
  const { closeDrawer } = useModalContext();

  return (
    <Drawer>
      <X size={32} onClick={closeDrawer} />
      <nav>
        <a href="#">Home</a>
        <a href="#about">Sobre</a>
        <a href="#benefits">Vantagens</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Consulte um especialista</a>
      </nav>
    </Drawer>
  );
}
