import styled from "styled-components";

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  button {
    width: 100%;
  }

  @media (max-width: 740px) {
    padding-bottom: 20px;
  }
`;
