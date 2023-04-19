import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context";
import TableContainer from "../../components/TableContainer";
import TableDetails from "../../components/TableDetails";
import TableLine from "../../components/TableLine";
import { Container } from "../../styles/global";
import TableNavbar from "../../components/TableNavbar";
import api from "../../services/api";
import { toast } from "react-toastify";

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
  const [userId, setUserId] = useState<string | null>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    const user_id = localStorage.getItem("@gofinance:user_id");
    setUserId(user_id);
  }, []);
  console.log("🚀 user_id:", userId);
  const createCategoryHandle = async () => {
    try {
      await api.post("/category", {
        user_id: Number(userId),
        title,
        description,
        type: "receipt",
      });
      toast.success('Categoria criada com sucesso!')
    } catch {
      toast.error('Erro ao criar categoria...')
    }
  };
  return (
    <Container>
      <TableContainer>
        <TableNavbar
          title="Nova categoria"
          buttonTitle="Criar categoria"
          setTitle={setTitle}
          setDescription={setDescription}
          createCategoryHandle={createCategoryHandle}
        />
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
