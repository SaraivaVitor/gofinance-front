import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black3};
  border-radius: 4px;
  padding-right: 16px;

  img{
    cursor: pointer;
  }
`;
