import DateInput from "../DateInput";
import SearchBar from "../SearchBar";
import { Container, LeftSide } from "./styles";

const TableNavbar = () => (
  <Container>
    <LeftSide>
      <DateInput title="Data inicial" />
      <DateInput title="Data final" />
      <SearchBar />
    </LeftSide>
    <button>Adicionar</button>
  </Container>
);

export default TableNavbar;
