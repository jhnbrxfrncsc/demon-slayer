import React from 'react';
import { BtnWrapper, StyledButton } from '../styled';

function Skills( { children } ) {
    return (
    <BtnWrapper>
        <StyledButton> Normal Button </StyledButton>
        <StyledButton primary> Primary Button </StyledButton>
        <StyledButton secondary> Secondary Button </StyledButton>
        <StyledButton dark> Dark Button </StyledButton>
        <StyledButton tomato> Tomato Button </StyledButton> 
    </BtnWrapper>
    )
}

export default Skills;
