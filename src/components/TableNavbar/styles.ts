import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  select {
    background-color: ${(props) => props.theme.colors.black1};
    width: 130px;
    cursor: pointer;
    border-radius: 4px 0px 0px 4px;
  }

  button {
    padding: 0px;
    width: 250px;
    height: 50px;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;
