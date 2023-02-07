import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { Benefits } from "../../components/Benefits";
import { Services } from "../../components/Services";
import { Contact } from "../../components/Contact";
import { ModalProvider } from "../../contexts/Modal";
import { HomeContainer } from "./styles";
import { Modal } from "../../components/Modal";

export function Home() {
  return (
    <ModalProvider>
      <Modal />
      <HomeContainer>
        <Header />
        <Banner />
        <About />
        <Benefits />
        <Services />
        <Contact />
      </HomeContainer>
    </ModalProvider>
  );
}
