import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 425px){
    align-items: center;
  }
`;

interface SubtitleProps {
    color: string;
    margin: string;
}

export const SubtitleContainer = styled.div<SubtitleProps>`
  display: flex;
  gap: 15px;
  
  div {
    background-color: ${props => props.color};
    width: 30px;
    height: 22px;
  }

  @media (max-width: 425px){
    align-items: center;
    margin-right: ${props => props.margin};
  }
`;
