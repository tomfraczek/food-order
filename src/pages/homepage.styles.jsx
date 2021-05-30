import styled from 'styled-components';

export const BrandContainer = styled.div`
    border-top: 3px solid #7c461c;
    border-bottom: 3px solid #7c461c;
    margin: 100px auto 40px auto;
    width: 40%;
    position: relative;
    padding-top: 40px;
`;

export const LogoContainer = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
    background: #fff;
`;

export const MenuTitle = styled.h3`
    color:#7c461c;
    text-align: center;
`;

export const MenuIntro = styled.p`
    color: #d48435;
`;

export const HomepageHeader = styled.h1`
    margin:0;
    color: #458107;
`;

export const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
    background: #fff;
    border-radius: 10px;
    position: relative;
    top: 50px;
    padding: 50px 0;
`