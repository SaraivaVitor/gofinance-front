import { useEffect, useState } from "react";
import TableContainer from "../../components/TableContainer";
import TableDetails from "../../components/TableDetails";
import TableLine from "../../components/TableLine";
import api from "../../services/api";
import { Container } from "../../styles/global";

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

const ReceiptCategories = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      api.get('/category').then(response => setData(response.data))
    }, [])
    console.log(data)
  return (
    <Container>
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
};

export default ReceiptCategories;
