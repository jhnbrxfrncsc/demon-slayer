import React from 'react';
import { Logo, StyledHeader, Title } from '../styled';

function Header() {
    return (
        <StyledHeader>
            <Logo src="img/logo.png" alt="logo" />
            <Title> Demon Slayer Game </Title>
        </StyledHeader>
    )
}

export default Header;
