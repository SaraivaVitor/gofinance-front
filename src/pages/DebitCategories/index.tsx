import { useCallback, useEffect, useState } from "react";
import TableContainer from "../../components/TableContainer";
import TableDetails from "../../components/TableDetails";
import TableLine from "../../components/TableLine";
import { Container } from "../../styles/global";
import TableNavbar from "../../components/TableNavbar";
import api from "../../services/api";
import { toast } from "react-toastify";
import { CategoriesType } from "../../types/categories";
import SearchType from "../../types/search";

const DebitCategories = () => {
  const [userId, setUserId] = useState<string | null>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchType, setSearchType] = useState<SearchType>("title");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const listDebitCategories = useCallback(
    async (id: string | null | undefined) => {
      try {
        setLoading(true);
        const response = await api.get(`/category?user_id=${id}&type=debit`);
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
    listDebitCategories(user_id);
  }, [userId, listDebitCategories]);
  const createCategoryHandle = useCallback(async () => {
    try {
      await api.post("/category", {
        user_id: Number(userId),
        title,
        description,
        type: "debit",
      });
      listDebitCategories(userId);
      toast.success("Categoria criada com sucesso!");
    } catch {
      toast.error("Erro ao criar categoria...");
    }
  }, [title, description, userId, listDebitCategories]);
  if (loading) return <div>Carregando...</div>;
  return (
    <Container>
      <TableContainer>
        <TableNavbar
          title="Nova categoria"
          pageType="category"
          transactionType="debit"
          buttonTitle="Criar categoria"
          itemTitle={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          onSubmit={createCategoryHandle}
          searchText={searchText}
          setSearchText={setSearchText}
          searchType={searchType}
          setSearchType={setSearchType}
          loadItems={setCategories}
          setLoading={setLoading}
        />
        <TableDetails pageType="category">
          {categories.map((category) => (
            <TableLine
              key={category.id}
              endpoint={`/category/${category.id}`}
              title={category.title}
              description={category.description}
              listCategories={listDebitCategories}
              editSuccessMessage="Categoria editada com sucesso!"
              editErrorMessage="Erro ao tentar editar categoria..."
              deleteSuccessMessage="Categoria deletada com sucesso!"
              deleteErrorMessage="Erro ao tentar deletar categoria..."
              pageType="category"
              payload={{
                user_id: Number(userId),
                ID: category.id,
                title: "",
                description: "",
                type: "debit",
              }}
            />
          ))}
        </TableDetails>
      </TableContainer>
    </Container>
  );
};

export default DebitCategories;
