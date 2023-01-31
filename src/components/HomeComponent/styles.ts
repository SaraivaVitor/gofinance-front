import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 200px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  button {
    width: 100%;
  }
`;
