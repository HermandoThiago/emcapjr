import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { Benefits } from "../../components/Benefits";
import { Services } from "../../components/Services";
import { Contact } from "../../components/Contact";
import { ModalProvider } from "../../contexts/Modal";
import { Modal } from "../../components/Modal";
import { Footer } from "../../components/Footer";
import { TopBar } from "../../components/TopBar";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <ModalProvider>
      <Modal />
      <HomeContainer>
        <TopBar />
        <Header />
        <Banner />
        <About />
        <Benefits />
        <Services />
        <Contact />
        <Footer />
      </HomeContainer>
    </ModalProvider>
  );
}
