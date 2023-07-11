import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal";
import SearchBar from "../SearchBar";
import { Container, LeftSide } from "./styles";
import { CategoriesType } from "../../types/categories";
import SearchType from "../../types/search";

interface TableNavbarProps {
  itemTitle: string;
  transactionType: 'debit' | 'receipt';
  title: string;
  description: string;
  buttonTitle: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  createCategoryHandle: () => Promise<void>;
  searchText: string;
  searchType: SearchType;
  setSearchText: Dispatch<SetStateAction<string>>;
  setSearchType: Dispatch<
    SetStateAction<SearchType>
  >;
  setCategories: Dispatch<
    SetStateAction<CategoriesType[]>
  >;
  setLoading: Dispatch<
    SetStateAction<boolean>
  >;
}

const TableNavbar = ({
  itemTitle,
  title,
  buttonTitle,
  setTitle,
  setDescription,
  createCategoryHandle,
  searchText,
  setSearchText,
  searchType,
  setSearchType,
  setCategories,
  setLoading,
  transactionType,
  description
}: TableNavbarProps) => (
  <Container>
    <LeftSide>
      <SearchBar 
        pageType="category"
        transactionType={transactionType}
        searchText={searchText}
        setSearchText={setSearchText}
        searchType={searchType}
        setSearchType={setSearchType}
        setCategories={setCategories}
        setLoading={setLoading}
      />
    </LeftSide>
    <Modal
      isButton
      title={title}
      itemTitle={itemTitle}
      description={description}
      buttonTitle={buttonTitle}
      setTitle={setTitle}
      setDescription={setDescription}
      onSubmit={createCategoryHandle}
    />
  </Container>
);

export default TableNavbar;
