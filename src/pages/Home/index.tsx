import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Banner />
    </HomeContainer>
  );
}
