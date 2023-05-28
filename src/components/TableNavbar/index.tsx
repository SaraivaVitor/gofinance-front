import { Dispatch, SetStateAction } from "react";
import Modal from "../Modal";
import SearchBar from "../SearchBar";
import { Container, LeftSide } from "./styles";
import { ReceiptCategoriesType } from "../../types/categories";
import SearchType from "../../types/search";

interface TableNavbarProps {
  title: string;
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
    SetStateAction<ReceiptCategoriesType[]>
  >;
  setLoading: Dispatch<
    SetStateAction<boolean>
  >;
}

const TableNavbar = ({
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
  setLoading
}: TableNavbarProps) => (
  <Container>
    <LeftSide>
      <SearchBar 
        pageType="category"
        searchText={searchText}
        setSearchText={setSearchText}
        searchType={searchType}
        setSearchType={setSearchType}
        setCategories={setCategories}
        setLoading={setLoading}
      />
    </LeftSide>
    <Modal
      title={title}
      buttonTitle={buttonTitle}
      setTitle={setTitle}
      setDescription={setDescription}
      createCategoryHandle={createCategoryHandle}
    />
  </Container>
);

export default TableNavbar;
