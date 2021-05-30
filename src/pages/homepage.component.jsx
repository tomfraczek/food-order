import React from 'react';
import CustomForm from '../components/custom-form/custom-form.component';
import { ReactComponent as Icon } from '../assets/top-icon.svg';
import { BrandContainer, LogoContainer, MenuTitle, MenuIntro, HomepageHeader, HomepageContainer } from './homepage.styles';

const Homepage = () => (
    <HomepageContainer>
        <HomepageHeader>Food Order Form</HomepageHeader>

        <BrandContainer>
            <LogoContainer>
                <Icon />
            </LogoContainer>
            <MenuTitle>Food Menu</MenuTitle>
        </BrandContainer>

        <MenuIntro>Create your order here</MenuIntro>

        <CustomForm />
    </HomepageContainer>
)

export default Homepage;