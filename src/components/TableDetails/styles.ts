import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  margin-top: 24px;
`;

export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.black3};
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 18px;

  h1 {
    font-size: 16px;
    color: ${(props) => props.theme.colors.primary};
    width: 300px;
    &:nth-child(2) {
        width: 70%;
    }
  }
  div{
    height: 100%;
    width: 200px;
  }
`;

export const Body = styled.div`
  background-color: ${(props) => props.theme.colors.black3};
  width: 100%;
  padding-left: 18px;
  margin-top: 4px;
  padding-top: 14px;
  padding-bottom: 14px;
`;
