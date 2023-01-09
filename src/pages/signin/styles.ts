import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  gap: 21px;
  border-radius: 16px;
  width: 45%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black1};

  img {
    margin-bottom: 40px;
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    &:hover{
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
  button {
    height: 51px;
    width: 491px;
    padding: 0;
  }
`;
