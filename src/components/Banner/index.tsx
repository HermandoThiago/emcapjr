import { ArrowRight } from "phosphor-react";
import { BannerContainer } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <p>Consultoria contábil e Financeira</p>
      <h1>Simplique a gestão financeira e contábil da sua empresa</h1>
      <p>
        Atuamos desde 2014 com prestação de serviços relacionados a consultoria
        financeira e Contábil.
      </p>
      <a href="#contact">
        Entrar em contato <ArrowRight size={22} />
      </a>
    </BannerContainer>
  );
}
