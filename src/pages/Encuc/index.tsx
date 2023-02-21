import { Modal } from "../../components/Modal";
import { ModalProvider } from "../../contexts/Modal";

export function Encuc() {
  return (
    <ModalProvider>
      <Modal />
    </ModalProvider>
  );
}
