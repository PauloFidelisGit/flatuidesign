import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = ({
  label, disabled, width, marginRight, state, options,
}) => {
  // state: { value: valor, setValue: valor }
  // const options = ['Opção 1', 'Opção 2', 'Opção 3'];

  // const [btn, setBtn] = useState('');
  // const state = { value: btn, setValue: setBtn };

  const [checkInput, setCheckInput] = useState('white');
  // console.log(checkInput);

  const HandleInput = ({ value }) => {
    if (state?.value) {
      state?.setValue(value);
      setCheckInput('lightblue');
    }
    if (state?.value.length === 0) {
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
          width={width}
          onChange={({ target }) => HandleInput(target)}
        >
          <option value=''> </option>
          <option value='default'>Selecione uma opção</option>
          {(typeof (options) !== 'undefined') && options.map((e, i) => <option key={i} value={e}>{e}</option>)}
        </InputStyled>
      </Label>
    </Container>
  );
};
export default Input;

const InputStyled = styled.select.attrs(({ disabled }) => ({
  disabled,
  defaultValue: 'default',
}))`
  outline: none;
  font-size: 1rem;
  padding: 10px;
  border-radius: 0;
  background-color: ${({ filled }) => filled};
  cursor: pointer;
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
