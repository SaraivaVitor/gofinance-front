import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 740px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  background-color: ${props => props.theme.colors.black2};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
