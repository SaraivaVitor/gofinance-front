import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;

  span{
    font-size: 16px;
    width: 300px;

    &:nth-child(2) {
        width: 67%;
    }
  }

  img {
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 200px;
`
