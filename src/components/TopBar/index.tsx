import { Phone, Envelope, Clock } from "phosphor-react";
import { Container } from "../Container";
import { TopBarContainer } from "./styles";

export function TopBar() {
  return (
    <TopBarContainer>
      <Container>
        <span>
          <Phone size={22} />
          (84) 99868-1388
        </span>
        <span>
          <Envelope size={22} />
          emcap@gmail.com
        </span>
        <span>
          <Clock size={22} />
          8:00 am - 17:00 pm
        </span>
      </Container>
    </TopBarContainer>
  );
}
