import styled from 'styled-components';

export const SpicinessLevelContainer = styled.div`
    display: flex;
    height: 5px;
    margin-bottom: 50px;
`;

export const Level = styled.div`
    width:10%;
    height:inherit;

    &:nth-child(n+1):nth-child(-n+3){
        background: green;
    }

    &:nth-child(n+4):nth-child(-n+6){
        background: orange;
    }

    &:nth-child(n+7):nth-child(-n+9){
        background: red;
    }

    &:nth-child(10){
        background: black;
    }
`;