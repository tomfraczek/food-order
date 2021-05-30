import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top:20px;
    left:20px;
    right:20px;
    bottom: 20px;
    background: #fff;
`;

export const ModalNotification = styled.h2`
    font-size: 42px;
    text-align: center;
    color: #87a61e;
`;

export const IconContainer = styled.div`
    width: 250px;
    margin: 0 auto 100px;
`;

export const OrderContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:40%;
`;

export const DetailHeader = styled.h2`
    font-size: 24px;
    text-align: center;
`;