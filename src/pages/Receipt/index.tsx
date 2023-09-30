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
import { TransactionsType } from "../../types/transactions";
import { addDays, isSameDay } from "date-fns";

const Receipt = () => {
  const [userId, setUserId] = useState<string | null>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState<number>();
  const [categoryId, setCategoryId] = useState(0);
  const [searchType, setSearchType] = useState<SearchType>("title");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [receipts, setReceipts] = useState<TransactionsType[]>([]);
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
  const listReceipt = useCallback(async (id: string | null | undefined) => {
    try {
      setLoading(true);
      const response = await api.get(`/account?user_id=${id}&type=receipt`);
      setReceipts(response.data);
    } catch {
      toast.error("Erro ao buscar dívidas...");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    const user_id = localStorage.getItem("@gofinance:user_id");
    setUserId(user_id);
    listReceipt(user_id);
    listReceiptCategories(user_id);
  }, [userId, listReceipt, listReceiptCategories]);
  const createReceiptHandler = useCallback(async () => {
    try {
      await api.post("/account", {
        user_id: Number(userId),
        title,
        description,
        value,
        category_id: categoryId,
        date: new Date(),
        type: "receipt",
      });
      listReceipt(userId);
      toast.success("Dívida adicionada com sucesso!");
    } catch {
      toast.error("Erro ao adicionar dívida...");
    }
  }, [categoryId, description, listReceipt, title, userId, value]);
  const dateCompare = () => {
    const itemsWithSameDate = receipts.filter((currentItem) => {
      const formattedDate = addDays(new Date(searchText), 1) 
      return isSameDay(new Date(currentItem.date), new Date(formattedDate));
    });
    setReceipts(itemsWithSameDate);
  };
  if (loading) return <div>Carregando...</div>;
  return (
    <Container>
      <TableContainer>
        <TableNavbar
          title="Novo recebimento"
          pageType="transaction"
          transactionType="receipt"
          buttonTitle="Adicionar recebimento"
          setCategoryId={setCategoryId}
          value={value}
          setValue={setValue}
          categories={categories}
          itemTitle={title}
          description={description}
          setTitle={setTitle}
          categoryId={categoryId}
          setDescription={setDescription}
          onSubmit={createReceiptHandler}
          searchText={searchText}
          setSearchText={setSearchText}
          searchType={searchType}
          setSearchType={setSearchType}
          loadItems={setReceipts}
          setLoading={setLoading}
          dateCompare={dateCompare}
        />
        <TableDetails pageType="transaction">
          {receipts.map((receipt) => (
            <TableLine
              key={receipt.id}
              endpoint={`/account/${receipt.id}`}
              title={receipt.title}
              description={receipt.description}
              date={receipt.date}
              value={receipt.value}
              categoryTitle={receipt.category_title.String}
              listCategories={listReceipt}
              editSuccessMessage="Recebimento editada com sucesso!"
              editErrorMessage="Erro ao tentar editar recebimento..."
              deleteSuccessMessage="Recebimento deletada com sucesso!"
              deleteErrorMessage="Erro ao tentar deletar recebimento..."
              pageType="transaction"
              payload={{
                user_id: Number(userId),
                ID: receipt.id,
                title: "",
                description: "",
                type: "receipt",
              }}
            />
          ))}
        </TableDetails>
      </TableContainer>
    </Container>
  );
};

export default Receipt;
