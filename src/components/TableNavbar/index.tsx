import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal";
import SearchBar from "../SearchBar";
import { Container, LeftSide } from "./styles";
import { CategoriesType } from "../../types/categories";
import SearchType from "../../types/search";
import { TransactionsType } from "../../types/transactions";

interface TableNavbarProps {
  itemTitle: string;
  transactionType: "debit" | "receipt";
  pageType: "transaction" | "category";
  value?: number;
  setValue?: Dispatch<SetStateAction<number | undefined>>;
  title: string;
  categoryId?: number;
  setCategoryId?: Dispatch<SetStateAction<number>>;
  categories?: CategoriesType[];
  description: string;
  buttonTitle: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  onSubmit: () => Promise<void>;
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

const TableNavbar = ({
  itemTitle,
  title,
  pageType,
  value,
  setValue,
  categoryId,
  setCategoryId,
  buttonTitle,
  setTitle,
  categories,
  setDescription,
  onSubmit,
  searchText,
  setSearchText,
  searchType,
  setSearchType,
  loadItems,
  setLoading,
  transactionType,
  description,
  dateCompare,
}: TableNavbarProps) => (
  <Container>
    <LeftSide>
      <SearchBar
        pageType={pageType}
        transactionType={transactionType}
        searchText={searchText}
        setSearchText={setSearchText}
        searchType={searchType}
        setSearchType={setSearchType}
        loadItems={loadItems}
        setLoading={setLoading}
        dateCompare={dateCompare}
      />
    </LeftSide>
    <Modal
      isButton
      value={value}
      setValue={setValue}
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      pageType={pageType}
      categories={categories}
      title={title}
      itemTitle={itemTitle}
      description={description}
      buttonTitle={buttonTitle}
      setTitle={setTitle}
      setDescription={setDescription}
      onSubmit={onSubmit}
    />
  </Container>
);

export default TableNavbar;
