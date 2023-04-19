import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  border-radius: 16px;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.black1};
  padding: 40px;

  p {
    margin: 0 auto;
  }
  img {
    margin-bottom: 40px;
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  input {
    height: 57px;
    width: 491px;
    border-radius: 8px;
    ::-webkit-input-placeholder {
      font-size: 20px;
    }
  }
  span {
    margin: 0 auto;
  }
  button {
    height: 51px;
    width: 491px;
    padding: 0;
    margin: 0 auto;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
`;
