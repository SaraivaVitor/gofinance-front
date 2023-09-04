import Image from "next/image";
import { Container } from "./styles";

import searchIcon from "../../assets/search.png";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { CategoriesType } from "../../types/categories";
import api from "../../services/api";
import SearchType from "../../types/search";
import { TransactionsType } from "../../types/transactions";
import { isSameDay } from "date-fns";

interface SearchProps {
  pageType: "transaction" | "category";
  transactionType: "debit" | "receipt";
  searchText: string;
  searchType: SearchType;
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchType: Dispatch<SetStateAction<SearchType>>;
  loadItems:
    | Dispatch<SetStateAction<CategoriesType[]>>
    | Dispatch<SetStateAction<TransactionsType[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  dateCompare?: () => void;
}

const SearchBar = ({
  pageType,
  transactionType,
  searchText,
  searchType,
  setSearchText,
  setSearchType,
  loadItems,
  setLoading,
  dateCompare,
}: SearchProps) => {
  const isTransactionPage = pageType === "transaction";
  const endpoint = isTransactionPage ? "account" : "category";
  const inputType = searchType === "date" ? "date" : "search";
  const searchReceiptCategories = async () => {
    const id = localStorage.getItem("@gofinance:user_id");
    if (searchType === "date" && dateCompare) {
      dateCompare();
    } else {
      try {
        setLoading(true);
        const response = await api.get(
          `/${endpoint}?user_id=${id}&type=${transactionType}&${searchType}=${searchText}`
        );
        loadItems(response.data);
      } catch {
        toast.error("Erro ao buscar categorias...");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <Container>
      <select onChange={(evt) => setSearchType(evt.target.value as SearchType)}>
        <option value="title">Título</option>
        <option value="description">Descrição</option>
        {isTransactionPage && (
          <>
            <option value="date">Data</option>
            <option value="category_id">Categoria</option>
          </>
        )}
      </select>
      <input
        value={searchText}
        type={inputType}
        placeholder="Pesquisar"
        onChange={(evt) => setSearchText(evt.currentTarget.value)}
      />
      <Image
        src={searchIcon}
        alt="/"
        width={12}
        onClick={searchReceiptCategories}
      />
    </Container>
  );
};

export default SearchBar;
