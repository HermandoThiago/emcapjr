import styled from "styled-components";

interface ModalContainer {
  visible: boolean;
}

export const ModalContainer = styled.div<ModalContainer>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background: red;
  display: ${(props) => (props.visible ? `flex` : `none`)};
`;
