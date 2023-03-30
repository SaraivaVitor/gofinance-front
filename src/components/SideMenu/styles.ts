import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.black1};
  height: 100%;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  a {
    position: absolute;
    top: 25px;
  }

  #logout {
    position: absolute;
    bottom: 25px;
    cursor: pointer;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  a {
    position: relative;
  }
`;
