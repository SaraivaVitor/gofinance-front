import { Dispatch, SetStateAction } from "react";
import DateInput from "../DateInput";
import Modal from "../Modal";
import SearchBar from "../SearchBar";
import { Container, LeftSide } from "./styles";

export interface ModalProps {
  title: string;
  buttonTitle: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  createCategoryHandle: () => Promise<void>;
}

const TableNavbar = ({
  title,
  buttonTitle,
  setTitle,
  setDescription,
  createCategoryHandle
}: ModalProps) => (
  <Container>
    <LeftSide>
      <DateInput title="Data inicial" />
      <DateInput title="Data final" />
      <SearchBar />
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
