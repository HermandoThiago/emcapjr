import { CircleWavyCheck, Coins } from "phosphor-react";
import { BenefistContainer, BenefitsWrapper, BenefitsCard } from "./styles";
import { Container } from "../Container";

export function Benefits() {
  return (
    <BenefistContainer id="benefits">
      <Container>
        <h2>Porque contratar a Emcap JR?</h2>
        <BenefitsWrapper>
          <BenefitsCard>
            <CircleWavyCheck size={70} />
            <h3>Qualidade</h3>
            <p>
              Consultores capacitados e orientados por profissionais da área, a
              fim de entregar a solução mais eficiente, acompanhada e focada no
              cliente.
            </p>
          </BenefitsCard>
          <BenefitsCard>
            <Coins size={70} />
            <h3>Custo-benefício</h3>
            <p>
              Consultores capacitados e orientados por profissionais da área, a
              fim de entregar a solução mais eficiente, acompanhada e focada no
              cliente.
            </p>
          </BenefitsCard>
          <BenefitsCard>
            <Coins size={70} />
            <h3>Custo-benefício</h3>
            <p>
              Consultores capacitados e orientados por profissionais da área, a
              fim de entregar a solução mais eficiente, acompanhada e focada no
              cliente.
            </p>
          </BenefitsCard>
        </BenefitsWrapper>
      </Container>
    </BenefistContainer>
  );
}
