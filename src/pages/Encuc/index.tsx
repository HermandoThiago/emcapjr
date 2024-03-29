import { List } from "phosphor-react";
import { Modal } from "../../components/Modal";
import { ModalProvider, useModalContext } from "../../contexts/Modal";
import { Container } from "../../components/Container";
import { MobileDrawer } from "../../components/MobileDrawer";
import {
  HeadContainer,
  NavigationContainer,
  BurguerMenu,
  BannerContainer,
  ProgrammingContainer,
  ProgrammingWrapper,
  MinicursosContainer,
  MinicurosWrapper,
  MinicursoCard,
  ImageDrop,
} from "./styles";

import encucLogo from "../../assets/encuc-logo.png";
import rodrigo from "../../assets/minicursos/rodrigo.jpeg";
import aldrich from "../../assets/minicursos/aldrich.jpeg";
import marconi from "../../assets/minicursos/marconi.jpeg";
import sanailton from "../../assets/palestras/sanailton.jpg";
import radna from "../../assets/palestras/radna.jpeg";
import perpetua from "../../assets/palestras/perpetua.jpeg";

export function Encuc() {
  const { openDrawer } = useModalContext();

  const openDrawerMobile = () => openDrawer({ children: <MobileDrawer /> });

  return (
    <ModalProvider>
      <Modal />
      <HeadContainer>
        <Container>
          <NavigationContainer>
            <div>
              <img src={encucLogo} />
            </div>
            <nav>
              <a href="#">Sobre</a>
              <a href="#programacao">Programação</a>
              <a href="#minicourses">Minicursos</a>
              <a href="#talking">Palestras</a>
              <a href="https://forms.gle/o6cVCeEq2B3GMyFk7" target="_blank">
                Inscrição
              </a>
            </nav>
            <BurguerMenu>
              <List size={22} onClick={openDrawerMobile} />
            </BurguerMenu>
          </NavigationContainer>
        </Container>
      </HeadContainer>
      <BannerContainer>
        <h2>Sobre o Encuc</h2>
        <p>
          O ENCUC é um evento anual de Extensão promovido pelo Departamento de
          Ciências Contábeis do Campus Avançado de Patu, da Universidade do
          Estado do Rio Grande do Norte que tem como objetivo geral promover a
          exposição e o debate de temas da área de Contabilidade e afins,
          buscando complementar a formação curricular discente e docente, bem
          como, fortalecer a socialização do conhecimento contábil e afim nos
          meios acadêmico, profissional e empresarial.
        </p>
      </BannerContainer>
      <ProgrammingContainer id="programacao">
        <ProgrammingWrapper>
          <h2>Programação</h2>
          <div id="inscricao">
            <h3>Inscrições</h3>
            <div>
              <p>
                De <time>09/05</time> a <time>23/05</time>
              </p>
              <p>
                R$ 35,00 (estudante) e R$ 40,00 (profissional) - válido até
                23/05 18:30
              </p>
              <p>
                Para realizar a inscrição acesse:{" "}
                <a href="https://forms.gle/o6cVCeEq2B3GMyFk7" target="_blank">
                  [Inscrições]
                </a>
              </p>
            </div>
          </div>

          <div id="eventos">
            <h3>Eventos</h3>
            <div>
              <p>
                Dia <time>23/05</time>
              </p>
              <p>18:30 - 19:30</p>
              <p>Credenciamento dos participantes</p>
            </div>
            <div>
              <p>19:30 – 20:00</p>
              <p>Solenidade de abertura, local: Auditório do CAP</p>
            </div>
            <div>
              <p>20:00 – 21:00</p>
              <p>
                Palestra de abertura – Consultoria contábil: desafios e
                oportunidades da contabilidade Palestrante: Radna Medeiros
              </p>
              <p>Local: Auditório CAP</p>
            </div>
            <div>
              <p>21:00 – 22:00</p>
              <p>Palestra: Recuperação fiscal Palestrante: Perpétua Moura</p>
              <p>Local: Auditório CAP</p>
            </div>
            <div>
              <p>
                Dia <time>24/05</time> e <time>25/05</time>
              </p>
              <p>19:00 – 22:00</p>
              <p>Minicursos</p>
              <p>Local: Salas de Contábeis</p>
            </div>
            <div>
              <p>
                Dia <time>26/05</time>
              </p>
              <p>14:00 - 18:00 Apresentação de trabalhos</p>
              <p>Local: Salas de Contábeis</p>
            </div>
            <div>
              <p>15:00 – 18:00</p>
              <p>Passeio turístico</p>
            </div>
            <div>
              <p>19:30 – 20:30</p>
              <p>
                Palestra: Contabilidade como ferramenta contra a corrupção
                Palestrante: Sanailton Dias
              </p>
              <p>Local: Auditório CAP</p>
            </div>
            <div>
              <p>20:30 – 21:00</p>
              <p>Apresentação cultural</p>
              <p>Local: Auditório CAP</p>
            </div>
            <div>
              <p>21:00 – 21:30</p>
              <p>Cerimônia de encerramento</p>
              <p>Local: Auditório CAP</p>
            </div>
          </div>

          <div id="minicursos">
            <h3>Minicursos - dia 24/05 e 25/05</h3>
            <div>
              <p>Minicurso 1 – Conhecendo o E-Social</p>
              <p>Ministrante: Rodrigo de Freitas</p>
              <p>Assistente de Departamento Pessoal da Ação Contabilidade</p>
            </div>
            <div>
              <p>
                Minicurso 2 – Inteligência Artificial e Office na Contabilidade
                4.0: Ferramentas e estratégias para facilitar e otimizar seu
                trabalho.
              </p>
              <p>Ministrante: Aldrich Heuser</p>
              <p>Secretário do CAP e graduado em processamento de dados</p>
            </div>
            <div>
              <p>Minicurso 3 – Imposto de Renda Pessoa física</p>
              <p>Ministrante: Auri Marconi</p>
              <p>Professor Mestre do CAP</p>
            </div>
          </div>

          <div id="palestras">
            <h3>Palestras</h3>
            <div>
              <p>
                Palestra 1 - Consultoria contábil: desafios e oportunidades da
                contabilidade
              </p>
              <p>Palestrante: Radna Medeiros Conselheira do CRC/RN</p>
            </div>
            <div>
              <p>Palestra 2 – Recuperação Fiscal</p>
              <p>Palestrante: Perpétua Moura</p>
              <p>Conselheira do CRC/RN</p>
            </div>
            <div>
              <p>
                Palestra 3 – Contabilidade como ferramenta contra a corrupção
              </p>
              <p> Palestrante: Sanailton Dias</p>
              <p>
                Professor da FACEM - UERN e Especialista em Gestão Pública,
                licitações e controladoria.
              </p>
            </div>
          </div>
        </ProgrammingWrapper>
      </ProgrammingContainer>
      <MinicursosContainer id="minicourses">
        <h2>Minicursos</h2>
        <MinicurosWrapper>
          <MinicursoCard>
            <ImageDrop img={rodrigo} />
            <div>
              <p>
                <strong>Tema: </strong> Conhecendo o E-Social
              </p>
              <p>
                <strong>Ministrante: </strong> Rodrigo de Freitas
              </p>
            </div>
          </MinicursoCard>
          <MinicursoCard>
            <ImageDrop img={aldrich} />
            <div>
              <p>
                <strong>Tema: </strong> Inteligência Artificial e Office na
                Contabilidade 4.0.
              </p>
              <p>
                <strong>Ministrante: </strong> Aldrich Heuser
              </p>
            </div>
          </MinicursoCard>
          <MinicursoCard>
            <ImageDrop img={marconi} />
            <div>
              <p>
                <strong>Tema: </strong> Imposto de Renda Pessoa física
              </p>
              <p>
                <strong>Ministrante: </strong> Auri Marconi
              </p>
            </div>
          </MinicursoCard>
        </MinicurosWrapper>
      </MinicursosContainer>
      <MinicursosContainer bg="color" id="talking">
        <h2>Palestras</h2>
        <MinicurosWrapper>
          <MinicursoCard>
            <ImageDrop img={radna} />
            <div>
              <p>
                <strong>Tema: </strong> Consultoria contábil: desafios e
                oportunidades da contabilidade
              </p>
              <p>
                <strong>Palestrante: </strong> Radna Medeiros - Conselheira do
                CRC/RN
              </p>
            </div>
          </MinicursoCard>
          <MinicursoCard>
            <ImageDrop img={perpetua} />
            <div>
              <p>
                <strong>Tema: </strong> Recuperação Fiscal
              </p>
              <p>
                <strong>Ministrante: </strong> Perpétua Moura - Conselheira do
                CRC/RN
              </p>
            </div>
          </MinicursoCard>
          <MinicursoCard>
            <ImageDrop img={sanailton} />
            <div>
              <p>
                <strong>Tema: </strong> Contabilidade como ferramenta contra a
                corrupção
              </p>
              <p>
                <strong>Ministrante: </strong> Sanailton Dias - Professor da
                FACEM - UERN e Especialista em Gestão Pública, licitações e
                controladoria.
              </p>
            </div>
          </MinicursoCard>
        </MinicurosWrapper>
      </MinicursosContainer>
    </ModalProvider>
  );
}
