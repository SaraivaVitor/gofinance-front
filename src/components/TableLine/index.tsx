import Image from "next/image";
import { Container } from "./styles";

import deleteIcon from '../../assets/delete.png'

interface TableLineProps {
    title: string;
    description: string;
}

const TableLine = ({title, description}:TableLineProps) => {
  return (
    <Container>
      <span>{title}</span>
      <span>{description}</span>
      <Image src={deleteIcon} alt="" width={24} />
    </Container>
  );
};

export default TableLine;
