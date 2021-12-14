import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = ({
  label, disabled, width, marginRight, state, min = 20, placeholder,
}) => {
  // state={{ value: btn, setValue: setBtn }}

  const [checkInput, setCheckInput] = useState('white');

  const HandleInput = ({ value }) => {
    const regx = /^\s*(?:[1-9]\d{0,2}(?:\.\d{3})*|0),\d{2}$/g;
    console.log(regx.test(value));
    if (regx && value.length <= Number(min)) {
      state?.setValue(value);
      setCheckInput('lightblue');
    }
    if (value.length === 0) {
      setCheckInput('white');
    }
  };

  return (
    <Container>
      <Label marginRight={marginRight}>
        {label}
        <InputStyled
          filled={checkInput}
          disabled={disabled}
          placeholder={placeholder}
          width={width}
          onChange={({ target }) => HandleInput(target)}
          value={state?.value}
        />
      </Label>
    </Container>
  );
};
export default Input;

const InputStyled = styled.input.attrs(({ disabled, placeholder }) => ({
  disabled,
}))`
  outline: none;
  font-size: 1rem;
  padding: 10px;
  border-radius: 0;
  background-color: ${({ filled }) => filled};
  cursor: text;
  border: 1px solid #CCCCCC;
  width: ${({ width }) => (width || 'auto')};
  transition: ease-in all 0.2s;
  &:focus {
      background-color: lightblue;
  }
  &:disabled{
      cursor: not-allowed;
      background-color: lightgray;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin-right: ${({ marginRight }) => (marginRight ? '15px' : '0px')};
`;

const Container = styled.div`
    padding-top: 13px;
`;
