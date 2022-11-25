import { ReactNode } from "react";
import SideMenu from "../SideMenu";
import { Container, Content } from "./styles";

interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate = ({ children }: AppTemplateProps) => (
  <Container>
    <SideMenu />
    <Content>{children}</Content>
  </Container>
);

export default AppTemplate;
