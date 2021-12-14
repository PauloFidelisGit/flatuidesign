import React, { useState } from 'react';
import styled from 'styled-components';
import InputText from '../../../components/InputText';
import InputNumber from '../../../components/InputNumber';
import InputCurrency from '../../../components/InputCurrency';
import { TabContainerStyled } from '../ContainerTabsStyled';

const ProductData = ({ save }) => {
  const {
    precoDeCusto, setPrecoDeCusto, precoDeVenda, setPrecoDeVenda,
  } = save;
  return (
    <TabContainerStyled>
      <InputCurrency
        label='Preço de custo'
        state={{ value: precoDeCusto, setValue: setPrecoDeCusto }}
      />
      <InputCurrency
        label='Preço de venda'
        state={{ value: precoDeVenda, setValue: setPrecoDeVenda }}
      />
    </TabContainerStyled>
  );
};
export default ProductData;
