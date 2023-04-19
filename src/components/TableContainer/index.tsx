import { ReactNode } from "react";
import { Container } from "./styles";

interface TableContainerProps {
  children: ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default TableContainer;
