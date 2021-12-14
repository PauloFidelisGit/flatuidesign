import { useState } from 'react';
import styled from 'styled-components';

// state: { value: valor, setValue: valor }
const Button = ({
  text, disabled, state, marginRight, onClick,
}) => (
  <InputStyled
    onClick={onClick}
    marginRight={marginRight}
    disabled={disabled}
  >
    {text}
  </InputStyled>
);
export default Button;

const InputStyled = styled.button.attrs(({ disabled }) => ({
  disabled,
}))`
        background-color: var(--primary-button-background-color);
        border: none;
        color: var(--primary-button-text-color);
        padding: 10px 0px;
        min-width: 120px;
        text-decoration: none;
        margin-top: 15px;
        margin-right: ${({ marginRight }) => (marginRight ? '15px' : '0px')};;
        cursor: pointer;
        width: ${({ width }) => (width ? '100%' : 'auto')};
        transition: ease-in all 0.2s;
        &:hover{
            background-color: var(--primary-button-background-hover-color);
        }
        &:disabled{
            cursor: not-allowed;
            background-color: lightgray;
        }
    `;
