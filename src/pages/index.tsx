import Chart from "../components/Chart";
import Card from "../components/Card";

import { Container, RightSide } from "../styles/home/home.styles";
import TableNavbar from "../components/TableNavbar";
import TableContainer from "../components/TableContainer";
import TableDetails from "../components/TableDetails";
import TableLine from "../components/TableLine";

const cardData = [
  {
    title: "Saldo a pagar",
    value: "R$ 120,55",
  },
  {
    title: "Saldo a receber",
    value: "R$ 120,55",
  },
  {
    title: "Saldo total",
    value: "R$ 120,55",
  },
];

const teste = [
  {
    title: "Titulo 1",
    description: "descrição 1",
  },
  {
    title: "Titulo 2",
    description: "descrição 2",
  },
  {
    title: "Titulo 3",
    description: "descrição 3",
  },
];

const Home = () => (
  <Container>
    {/* <Chart />
    <RightSide>
      {cardData.map((card) => (
        <Card key={card.title} title={card.title} value={card.value} />
      ))}
      <button>Download</button>
    </RightSide> */}
    <TableContainer>
      <TableDetails>
        {teste.map((test) => (
          <TableLine
            key={test.title}
            title={test.title}
            description={test.description}
          />
        ))}
      </TableDetails>
    </TableContainer>
  </Container>
);

export default Home;
