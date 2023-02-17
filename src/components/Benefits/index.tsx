import {
  CircleWavyCheck,
  Coins,
  Handshake,
  CrownSimple,
  PaintBrushBroad,
} from "phosphor-react";
import { BenefistContainer, BenefitsWrapper, BenefitsCard } from "./styles";
import { Container } from "../Container";

export function Benefits() {
  return (
    <BenefistContainer id="benefits">
      <Container>
        <h2>Porque contratar a Emcap JR?</h2>
        <BenefitsWrapper>
          <BenefitsCard>
            <CircleWavyCheck size={65} />
            <h3>Qualidade</h3>
            <p>
              Consultores capacitados e orientados por profissionais da área, a
              fim de entregar a solução mais eficiente, acompanhada e focada no
              cliente. Foco total na qualidade do nosso serviço.
            </p>
          </BenefitsCard>
          <BenefitsCard>
            <Coins size={65} />
            <h3>Custo-benefício</h3>
            <p>
              Nosso compromisso é entregar serviços de qualidade por um preço
              justo, buscando sempre oferecer um excelente retorno do
              investimento para nossos clientes.
            </p>
          </BenefitsCard>
          <BenefitsCard>
            <Handshake size={65} />
            <h3>Credibilidade</h3>
            <p>
              Nossos consultores altamente capacitados possuem vasta experiência
              em diversas áreas de negócios, garantindo soluções personalizadas
              e efetivas para sua empresa.
            </p>
          </BenefitsCard>
          <BenefitsCard>
            <CrownSimple size={65} />
            <h3>Comprometimento</h3>
            <p>
              Comprometimento é a nossa prioridade! Estamos prontos para
              oferecer soluções personalizadas e eficazes que vão impulsionar o
              crescimento e a rentabilidade do seu negócio.
            </p>
          </BenefitsCard>
          <BenefitsCard>
            <PaintBrushBroad size={65} />
            <h3>Inovação</h3>
            <p>
              Inovação é nossa marca registrada! Descubra como a EmcapJr
              Empresarial pode ajudar sua empresa a alcançar resultados
              surpreendentes com soluções criativas e eficientes.
            </p>
          </BenefitsCard>
        </BenefitsWrapper>
      </Container>
    </BenefistContainer>
  );
}
