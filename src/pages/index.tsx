import Chart from "../components/Chart";
import Card from "../components/Card";

import { RightSide } from "../styles/home/home.styles";
import TableNavbar from "../components/TableNavbar";
import TableContainer from "../components/TableContainer";
import TableDetails from "../components/TableDetails";
import TableLine from "../components/TableLine";
import { Container } from "../styles/global";

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

const Home = () => (
  <Container>
    <Chart />
    <RightSide>
      {cardData.map((card) => (
        <Card key={card.title} title={card.title} value={card.value} />
      ))}
      <button>Download</button>
    </RightSide>
  </Container>
);

export default Home;
