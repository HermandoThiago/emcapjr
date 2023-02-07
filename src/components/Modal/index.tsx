import { useModalContext } from "../../contexts/Modal";
import { ModalContainer } from "./styles";

export function Modal() {
  const {
    modalState: { children, visible },
  } = useModalContext();

  return <ModalContainer visible={visible}>{children}</ModalContainer>;
}
