import { ReactNode } from "react";
import { Body, Container, Header } from "./styles";

interface TableDetailsProps {
  children: ReactNode;
  pageType: "category" | "transaction";
}

const TableDetails = ({ children, pageType }: TableDetailsProps) => {
  const isTransaction = pageType === "transaction";
  return (
    <Container>
      <Header>
        <h1>Título</h1>
        <h1>Descrição</h1>
        {isTransaction && (
          <>
            <h1>Categoria</h1>
            <h1>Data</h1>
            <h1>Valor</h1>
          </>
        )}
        <div />
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default TableDetails;
