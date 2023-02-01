import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { Benefits } from "../../components/Benefits";
import { Services } from "../../components/Services";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <About />
      <Benefits />
      <Services />
    </HomeContainer>
  );
}
