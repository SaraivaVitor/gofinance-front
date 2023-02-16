import { ReactNode } from "react";
import TableNavbar from "../TableNavbar";
import { Container } from "./styles";

interface TableContainerProps {
  children: ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
  return (
    <Container>
      <TableNavbar />
      {children}
    </Container>
  );
};

export default TableContainer;
