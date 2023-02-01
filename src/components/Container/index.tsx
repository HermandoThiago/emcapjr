import { DefaultContainer } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <DefaultContainer id="container">{children}</DefaultContainer>;
}
