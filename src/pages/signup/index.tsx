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
import api from "../../services/api";
import useLogin from "../../hooks/useLogin";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [responseErrorMessage, setResponseErrorMessage] = useState("");
  const buttonLabel = isLoading ? "Carregando..." : "Cadastrar";
  const passwordIsValid = password === confirmPassword;
  const { login } = useLogin();
  const verifyEmail = (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };
  const cleanErrors = () => {
    setHasError(false);
    setPasswordErrorMessage("");
    setEmailErrorMessage("");
    setResponseErrorMessage("");
  };
  const signup = async () => {
    const emailIsValid = verifyEmail(email);
    try {
      setIsLoading(true);
      cleanErrors();
      if (!emailIsValid) {
        setHasError(true);
        setEmailErrorMessage("Email inválido.");
        throw Error();
      }
      if (!passwordIsValid) {
        setHasError(true);
        setPasswordErrorMessage("As senhas precisam ser compativeis.");
        throw Error();
      }
      await api.post("/user", {
        username,
        email,
        password,
      });
      await login({ username, password });
    } catch (err: any) {
      toast.error('Falha ao tentar fazer o cadastro...')
      const userAlreadyExists = err.response?.status === 500;
      const hasEmptyInput = err.response?.status === 400;
      if (userAlreadyExists)
        setResponseErrorMessage(
          "Já existe um usuário cadastrado com este email ou username na plataforma"
        );
      if (hasEmptyInput)
        setResponseErrorMessage(
          "Preencha todos os campos para poder cadastrar na plataforma"
        );
    } finally {
      setIsLoading(false);
    }
  };
  const inputProps = [
    {
      type: "text",
      placeholder: "Nome de usuário",
      setState: setUsername,
      errorMessage: "",
    },
    {
      type: "email",
      placeholder: "Email",
      setState: setEmail,
      errorMessage: emailErrorMessage,
    },
    {
      type: "password",
      placeholder: "Senha",
      setState: setPassword,
      errorMessage: "",
    },
    {
      type: "password",
      placeholder: "Repetir senha",
      setState: setConfirmPassword,
      errorMessage: passwordErrorMessage,
    },
  ];
  return (
    <Container>
      <Content>
        <Image src={logo} alt="GoFinance" width={150} />
        <FormContainer>
          {inputProps.map((prop) => (
            <>
              <input
                type={prop.type}
                placeholder={prop.placeholder}
                onChange={(evt) => prop.setState(evt.target.value)}
              />
              <ErrorMessage>{hasError && prop.errorMessage}</ErrorMessage>
            </>
          ))}
          <button onClick={signup}>{buttonLabel}</button>
          <ErrorMessage>{responseErrorMessage}</ErrorMessage>
          <p>
            Já possui uma conta? <Link href="/signin">Entre!</Link>
          </p>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Signup;
