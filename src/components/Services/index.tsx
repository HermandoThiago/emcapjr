import { Scales, Buildings, Wallet, Storefront } from "phosphor-react";
import { ServicesContainer, ServicesWrapper, ServicesCard } from "./styles";
import { Container } from "../Container";

export function Services() {
  return (
    <ServicesContainer id="services">
      <Container>
        <h2>Nossos serviços</h2>
        <p>Quer potencializar os resultados da sua empresa?</p>
        <p>Conheça nossos serviços de gestão financeira e contabilidade.</p>
        <ServicesWrapper>
          <ServicesCard>
            <Scales size={50} />
            <p>Imposto de renda</p>
            <a href="#contact">Contratar serviço</a>
          </ServicesCard>
          <ServicesCard>
            <Buildings size={50} />
            <p>Abertura de MEIs</p>
            <a href="#contact">Contratar serviço</a>
          </ServicesCard>
          <ServicesCard>
            <Wallet size={50} />
            <p>Gestão financeira</p>
            <a href="#contact">Contratar serviço</a>
          </ServicesCard>
          <ServicesCard>
            <Storefront size={50} />
            <p>Análise gerencial</p>
            <a href="#contact">Contratar serviço</a>
          </ServicesCard>
        </ServicesWrapper>
      </Container>
    </ServicesContainer>
  );
}
