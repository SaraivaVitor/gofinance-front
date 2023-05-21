import { useCallback, useEffect, useState } from "react";
import TableContainer from "../../components/TableContainer";
import TableDetails from "../../components/TableDetails";
import TableLine from "../../components/TableLine";
import { Container } from "../../styles/global";
import TableNavbar from "../../components/TableNavbar";
import api from "../../services/api";
import { toast } from "react-toastify";
import { ReceiptCategoriesType } from "../../types/categories";

const ReceiptCategories = () => {
  const [userId, setUserId] = useState<string | null>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<ReceiptCategoriesType[]>([]);
  const listReceiptCategories = useCallback(
    async (id: string | null | undefined) => {
      try {
        setLoading(true);
        const response = await api.get(`/category?user_id=${id}&type=receipt`);
        setCategories(response.data);
      } catch {
        toast.error("Erro ao buscar categorias...");
      } finally {
        setLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    const user_id = localStorage.getItem("@gofinance:user_id");
    setUserId(user_id);
    listReceiptCategories(user_id);
  }, [userId, listReceiptCategories]);
  const createCategoryHandle = useCallback(async () => {
    try {
      await api.post("/category", {
        user_id: Number(userId),
        title,
        description,
        type: "receipt",
      });
      listReceiptCategories(userId)
      toast.success("Categoria criada com sucesso!");
    } catch {
      toast.error("Erro ao criar categoria...");
    }
  }, [title, description, userId, listReceiptCategories]);
  if (loading) return <div>Carregando...</div>;
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
          {categories.map((category) => (
            <TableLine
              key={category.id}
              title={category.title}
              description={category.description}
            />
          ))}
        </TableDetails>
      </TableContainer>
    </Container>
  );
};

export default ReceiptCategories;
