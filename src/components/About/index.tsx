import { AboutContainer, Content, ImagePresentation } from "./styles";
import emcap from "../../assets/logo-emcap.png";
import { Container } from "../Container";

export function About() {
  return (
    <AboutContainer id="about">
      <Container>
        <Content>
          <p>Quem somos</p>
          <h3>
            Somos a melhor empresa júnior de contabilidade do Rio Grande do
            Norte.
          </h3>
          <p>
            A EmcapJr é uma associação civil sem fins lucrativos com finalidades
            educacionais, formada por alunos do curso de Ciências Contábeis do
            Campus Avançado de Patu (CAP) da Universidade do Estado do Rio
            Grande do Norte (UERN), com o intuito de vivenciar a prática
            profissional com o desenvolvimento de projetos para a sociedade e as
            micro e pequenas empresas de Patu-RN e região. Nossa missão é
            Prestar assessoria e consultoria na área contábil, com foco na
            excelência dos serviços prestados e satisfação dos clientes, bem
            como, desenvolver o acadêmico de Ciências Contábeis por meio de
            projetos e gestões, cultivando o espírito empreendedor em Patu/RN e
            cidades circunvizinhas, criando um elo entre á Universidade do
            Estado do Rio Grande do Norte e a sociedade.
          </p>
          <button>Entrar em contato</button>
        </Content>
        <ImagePresentation>
          <img src={emcap} />
        </ImagePresentation>
      </Container>
    </AboutContainer>
  );
}
