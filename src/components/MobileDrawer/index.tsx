import { X } from "phosphor-react";
import { Drawer } from "./styles";
import { useModalContext } from "../../contexts/Modal";

export function MobileDrawer() {
  const { closeDrawer } = useModalContext();

  return (
    <Drawer>
      <X size={32} onClick={closeDrawer} />
      <nav>
        <a href="#" onClick={closeDrawer}>
          Home
        </a>
        <a href="#about" onClick={closeDrawer}>
          Sobre
        </a>
        <a href="#benefits" onClick={closeDrawer}>
          Vantagens
        </a>
        <a href="#services" onClick={closeDrawer}>
          Serviços
        </a>
        <a href="/encuc" onClick={closeDrawer}>
          Encuc 2023
        </a>
        <a href="#contact" onClick={closeDrawer}>
          Consulte um especialista
        </a>
      </nav>
    </Drawer>
  );
}
