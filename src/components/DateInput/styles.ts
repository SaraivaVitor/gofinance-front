import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    h1{
        font-size: 16px;
        color: ${(prop) => prop.theme.colors.primary};
        font-weight: bold;
    }
`;
