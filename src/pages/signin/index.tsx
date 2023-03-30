import Image from "next/image";
import {
  Container,
  Content,
  ErrorMessage,
  FormContainer,
} from "../../styles/auth/auth.styles";

import logo from "../../assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Signin = () => {
  const { login } = useLogin();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const signIn = async() => {
    try {
      login({ userName, password });
    } catch (err: any) {
      const userNotFound = err.response?.status === 404;
      console.log(err.response?.status)
      if (userNotFound) setErrorMessage("Usuário não encontrado na plataforma");
    }
  };
  return (
    <Container>
      <Content>
        <Image src={logo} alt="GoFinance" width={150} />
        <FormContainer>
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
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <p>
            Ainda não possui uma conta? <Link href="/signup">Cadastre-se!</Link>
          </p>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Signin;
