import { useRouter } from "next/router";
import { ReactNode } from "react";
import SideMenu from "../SideMenu";
import { Container, Content } from "./styles";

interface AppTemplateProps {
  children: ReactNode;
}

const AppTemplate = ({ children }: AppTemplateProps) => {
  const {pathname} = useRouter()
  const isAuthPages = pathname === "/signin" || pathname === "/signup";
  return(
    <Container>
      {!isAuthPages && <SideMenu />}
      <Content>{children}</Content>
    </Container>
  );
}

export default AppTemplate;
