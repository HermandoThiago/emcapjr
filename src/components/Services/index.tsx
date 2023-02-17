import {
  Scales,
  Buildings,
  Wallet,
  Storefront,
  Calculator,
} from "phosphor-react";
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
            <p>Assessoria ao MEI</p>
            <a href="#contact">Contratar serviço</a>
          </ServicesCard>
          <ServicesCard>
            <Wallet size={50} />
            <p>Consultoria financeira</p>
            <a href="#contact">Contratar serviço</a>
          </ServicesCard>
          <ServicesCard>
            <Storefront size={50} />
            <p>Consultoria de custos e precificação</p>
            <a href="#contact">Contratar serviço</a>
          </ServicesCard>
          <ServicesCard>
            <Calculator size={50} />
            <p>Assessoria contábil</p>
            <a href="#contact">Contratar serviço</a>
          </ServicesCard>
        </ServicesWrapper>
      </Container>
    </ServicesContainer>
  );
}
