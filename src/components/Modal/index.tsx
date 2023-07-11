import { Dispatch, SetStateAction, useRef, useState } from "react";
import { OutsideContainer, Container } from "./styles";
import Image from "next/image";

import editIcon from "../../assets/pencil-sharp.png";

interface ModalProps {
  title: string;
  itemTitle?: string;
  description?: string;
  buttonTitle: string;
  isButton?: boolean;
  isEditing?: boolean;
  editingTitle?: string;
  editingDescription?: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  onSubmit: () => Promise<void>;
}

const Modal = ({
  title,
  itemTitle,
  description,
  buttonTitle,
  isButton,
  isEditing,
  editingTitle,
  editingDescription,
  setTitle,
  setDescription,
  onSubmit,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const outSideContainerRef = useRef(null);
  const openModal = () => setIsOpen(true);
  const closeModal = (evt: React.MouseEvent<HTMLElement>) => {
    if (evt.target === outSideContainerRef.current) {
      setIsOpen(false);
    }
  };
  const submit = async () => {
    await onSubmit();
    setIsOpen(false);
  };
  return (
    <>
      {isButton ? (
        <button onClick={openModal}>Adicionar</button>
      ) : (
        <Image src={editIcon} alt="" width={24} onClick={openModal} />
      )}
      {isOpen && (
        <OutsideContainer onClick={closeModal} ref={outSideContainerRef}>
          <Container>
            <h2>{title}</h2>
            <input
              type="text"
              value={isEditing ? editingTitle : itemTitle}
              placeholder="Título"
              onChange={(evt) => setTitle(evt.target.value)}
            />
            <input
              type="text"
              value={isEditing ? editingDescription : description}
              placeholder="Descrição"
              onChange={(evt) => setDescription(evt.target.value)}
            />
            <button onClick={submit}>{buttonTitle}</button>
          </Container>
        </OutsideContainer>
      )}
    </>
  );
};

export default Modal;
