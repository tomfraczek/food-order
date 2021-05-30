import styled from 'styled-components';

export const CustomFieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 25px;
    flex-wrap: wrap;

    input,
    select{
        padding: 5px;
        width: 100%!important;
    }
`;

export const Label = styled.label`
    color: #458107;
`;
