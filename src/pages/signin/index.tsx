import Image from "next/image";
import { Container, Content } from "../../styles/auth/auth.styles";

import logo from "../../assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Signin = () => {
  const { login } = useLogin();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => login({ userName, password });
  return (
    <Container>
      <Content>
        <Image src={logo} alt="GoFinance" width={150} />
        <input
          type="text"
          placeholder="Nome de usuário"
          autoComplete="off"
          onChange={(evt) => setUserName(evt.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          autoComplete="off"
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button onClick={signIn}>Entrar</button>
        <p>
          Ainda não possui uma conta? <Link href="/signup">Cadastre-se!</Link>
        </p>
      </Content>
    </Container>
  );
};

export default Signin;
