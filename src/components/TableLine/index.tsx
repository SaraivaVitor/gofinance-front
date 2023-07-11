import Image from "next/image";
import { ButtonsContainer, Container } from "./styles";

import deleteIcon from "../../assets/delete.png";
import Modal from "../Modal";
import { useCallback, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

interface EditItemProps {
  user_id: number;
  ID: number;
  title: string;
  description: string;
  type: "receipt" | "debit";
}

interface TableLineProps {
  title: string;
  editErrorMessage: string;
  deleteSuccessMessage: string;
  deleteErrorMessage: string;
  editSuccessMessage: string;
  description: string;
  payload: EditItemProps;
  endpoint: string;
  listCategories: (id: string | null | undefined) => Promise<void>;
}

const TableLine = ({
  title,
  description,
  listCategories,
  payload,
  editSuccessMessage,
  editErrorMessage,
  deleteSuccessMessage,
  deleteErrorMessage,
  endpoint,
}: TableLineProps) => {
  const [editingTitle, setEditingTitle] = useState(title);
  const [editingDescription, setEditingDescription] = useState(description);
  const deleteItemHandler = async() => {
    const user_id = localStorage.getItem("@gofinance:user_id");
    try {
      await api.delete(endpoint);
      listCategories(user_id);
      toast.success(deleteSuccessMessage)
    } catch {
      toast.error(deleteErrorMessage);
    }
  }
  const editItemHandler = useCallback(async () => {
    try {
      const user_id = localStorage.getItem("@gofinance:user_id");
      await api.put(endpoint, {
        ...payload,
        title: editingTitle,
        description: editingDescription,
      });
      listCategories(user_id);
      toast.success(editSuccessMessage);
    } catch {
      toast.error(editErrorMessage);
    }
  }, [endpoint, payload, editingTitle, editingDescription, listCategories, editSuccessMessage, editErrorMessage]);
  return (
    <Container>
      <span>{title}</span>
      <span>{description}</span>
      <ButtonsContainer>
        <Modal
          isEditing
          title="Editar categoria"
          buttonTitle="Editar categoria"
          editingTitle={editingTitle}
          editingDescription={editingDescription}
          setTitle={setEditingTitle}
          setDescription={setEditingDescription}
          onSubmit={editItemHandler}
        />
        <Image src={deleteIcon} alt="" width={24} onClick={deleteItemHandler} />
      </ButtonsContainer>
    </Container>
  );
};

export default TableLine;
