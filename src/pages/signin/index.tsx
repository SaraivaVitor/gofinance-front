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
import { toast } from "react-toastify";

const Signin = () => {
  const { login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const signIn = async () => {
    try {
      await login({ username, password });
    } catch (err: any) {
      toast.error("Falha ao tentar fazer login...");
      const userNotFound = err.response?.status === 404;
      const invalidCredentialsNotFound = err.response?.status === 401;
      if (userNotFound) setErrorMessage("Usuário não encontrado na plataforma");
      if (invalidCredentialsNotFound) setErrorMessage("Credenciais inválidas");
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
            onChange={(evt) => setUsername(evt.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            autoComplete="off"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <button onClick={signIn}>Entrar</button>
          <span>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </span>
          <p>
            Ainda não possui uma conta? <Link href="/signup">Cadastre-se!</Link>
          </p>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Signin;
