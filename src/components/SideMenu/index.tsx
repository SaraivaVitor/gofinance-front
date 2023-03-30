import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/logo.png";
import debit from "../../assets/debit.png";
import receipt from "../../assets/receipt.png";
import debitCategories from "../../assets/debitCategories.png";
import receiptCategories from "../../assets/receiptCategories.png";
import logoutImage from "../../assets/logout.png";

import { Container, MenuItems } from "./styles";
import useLogin from "../../hooks/useLogin";

const menuItems = [
  {
    href: "/Debit",
    src: debit,
    alt: 'debit'
  },
  {
    href: "/Receipt",
    src: receipt,
    alt: 'receipt'
  },
  {
    href: "/DebitCategories",
    src: debitCategories,
    alt: 'debitCategories'
  },
  {
    href: "/ReceiptCategories",
    src: receiptCategories,
    alt: 'receiptCategories'
  },
];

const SideMenu = () => {
  const {logout} = useLogin()
  return (
    <Container>
      <Link href="/">
        <Image src={logo} alt="GoFinance" width={60} />
      </Link>
      <MenuItems>
        {menuItems.map((menuitem) => (
          <Link key={menuitem.href} href={menuitem.href} >
            <Image src={menuitem.src } alt="/" width={41} />
          </Link>
        ))}
      </MenuItems>
      <Image id="logout" src={logoutImage} alt="logout" width={30} onClick={logout} />
    </Container>
  );
};

export default SideMenu;
