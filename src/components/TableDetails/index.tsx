import { ReactNode } from "react";
import { Body, Container, Header } from "./styles";

interface TableDetailsProps {
    children: ReactNode;
}

const TableDetails = ({children}: TableDetailsProps) => {
  return (
    <Container>
      <Header>
        <h1>Título</h1>
        <h1>Descrição</h1>
      </Header>
      <Body>
        {children}
      </Body>
    </Container>
  );
};

export default TableDetails;
