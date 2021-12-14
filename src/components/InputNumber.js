import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = ({
  label, disabled, width, marginRight, state, min = 20, placeholder,
}) => {
  // state={{ value: btn, setValue: setBtn }}

  const [checkInput, setCheckInput] = useState('white');

  const HandleInput = ({ value }) => {
    if (!Number.isNaN(Number(value)) && value.length <= Number(min)) {
      state?.setValue(Number(value));
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
  placeholder,
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
