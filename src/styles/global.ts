import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 200px;

  @media (max-width: 1254px) {
    gap: 0;
  }
  @media (max-width: 850px) {
    margin-left: 60px;
  }
  @media (max-width: 740px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    body {
        background-color: ${(props) => props.theme.colors.black2};
        color: ${(props) => props.theme.colors.white}; 
    }
    button {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
        border-radius: 8px;
        padding: 16px;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
        transition: all 1;
        
        &:hover{
            background-color: ${(props) => props.theme.colors.secondary};
        }
    }
    input, select{
        background-color: ${(props) => props.theme.colors.black3};
        border-radius: 4px;
        border: none;
        color: ${(props) => props.theme.colors.white};
        min-height: 27px;
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 8px;
        padding-top: 8px;
        
        ::-webkit-input-placeholder{
            color: #4B4747;
            font-size: 12px;
            font-weight: 500;
        }
        &:focus{
            outline: none;
        }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
        background-color: ${(props) => props.theme.colors.black3};
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: ${(props) => props.theme.colors.white};
        ::-webkit-input-placeholder{
            color: #4B4747;
            font-size: 12px;
            font-weight: 500;
        }
    }
    input[type="date"]{
        ::-webkit-calendar-picker-indicator {
            background-image: url(/calendar.png);
            cursor: pointer;
        }
    }
    select{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 150px;
        background-image: 
            linear-gradient(45deg, transparent 50%, #FF7A00 50%),
            linear-gradient(135deg, #FF7A00  50%, transparent 50%);
        background-position:
            calc(100% - 20px) calc(1em + 2px),
            calc(100% - 15px) calc(1em + 2px),
            calc(100% - .5em) .5em;
        background-size:
            5px 5px,
            5px 5px,
            1.5em 1.5em;
        background-repeat: no-repeat;
        select::-ms-expand {
            display: none;
        }
    }
`;
