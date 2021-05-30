import styled from 'styled-components';

export const Button = styled.button`
    background: ${({inverted}) => inverted ? 'none' : '#87a61e'};
    color: ${({inverted}) => inverted ? '#87a61e' : '#fff'};
    border: 2px solid #87a61e;
    padding: 10px 30px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    min-width: 130px;
    margin-bottom: 10px;

    &:hover{
        cursor: pointer;
        background: ${({inverted}) => inverted ? '#87a61e' : 'none'};
        color: ${({inverted}) => inverted ? '#fff' : '#87a61e'};
    }
`;