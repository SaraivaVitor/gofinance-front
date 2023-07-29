import styled from "styled-components";

export const OutsideContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(19, 18, 18, 0.4);
`;

export const Container = styled.div`
  width: 607px;
  border-radius: 16px;
  display: flex;
  background-color: ${(props) => props.theme.colors.black1};
  flex-direction: column;
  padding: 58px;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 32px;
  }
  input {
    height: 57px;
    margin-bottom: 21px;
    ::-webkit-input-placeholder {
      font-size: 20px;
    }
  }
  select {
    height: 57px;
    width: 100%;
    margin-bottom: 21px;
    background-color: ${(props) => props.theme.colors.black3};
    ::-webkit-input-placeholder {
      font-size: 20px;
    }
  }
  button {
    width: 100%;
  }
`;
