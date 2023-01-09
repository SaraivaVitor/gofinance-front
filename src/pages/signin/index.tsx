import Image from "next/image";
import { Container, Content } from "./styles";

import logo from "../../assets/logo.png";
import Link from "next/link";

const Signin = () => (
  <Container>
    <Content>
      <Image src={logo} alt="GoFinance" width={150} />
      <input type="text" placeholder="Nome de usuário" autoComplete="off" />
      <input type="password" placeholder="Senha" autoComplete="off" />
      <button>Entrar</button>
      <p>
        Ainda não possui uma conta? <Link href="/signup">Cadastre-se!</Link>
      </p>
    </Content>
  </Container>
);

export default Signin;
