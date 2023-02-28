import Image from "next/image";
import {
  Container,
  Content,
  ErrorMessage,
} from "../../styles/auth/auth.styles";

import logo from "../../assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const buttonLabel = isLoading ? "Carregando..." : "Cadastrar";
  const router = useRouter();
  const passwordIsValid = password === confirmPassword;
  const signup = async () => {
    try {
      setIsLoading(true);
      if (!passwordIsValid) {
        setHasError(true);
        throw Error();
      }
      await fetch(`http://localhost:8000/user`, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      router.push("/");
    } catch (err) {
      if (!passwordIsValid) {
        setErrorMessage("As senhas precisam ser compativeis.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const inputProps = [
    {
      type: 'text',
      placeholder: 'Nome de usuário',
      setState: setUsername
    },
    {
      type: 'email',
      placeholder: 'Email',
      setState: setEmail
    },
    {
      type: 'password',
      placeholder: 'Senha',
      setState: setPassword
    },
    {
      type: 'password',
      placeholder: 'Repetir senha',
      setState: setConfirmPassword
    },
  ]
  return (
    <Container>
      <Content>
        <Image src={logo} alt="GoFinance" width={150} />
        {inputProps.map((prop) => (
          <input
            key={prop.placeholder}
            type={prop.type}
            placeholder={prop.placeholder}
            onChange={(evt) => prop.setState(evt.target.value)}
          />
        ))}
        <button onClick={signup}>{buttonLabel}</button>
        <ErrorMessage>{hasError && errorMessage}</ErrorMessage>
        <p>
          Já possui uma conta? <Link href="/signin">Entre!</Link>
        </p>
      </Content>
    </Container>
  );
};

export default Signup;
