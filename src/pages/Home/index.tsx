import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { About } from "../../components/About";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
      <About />
    </HomeContainer>
  );
}
