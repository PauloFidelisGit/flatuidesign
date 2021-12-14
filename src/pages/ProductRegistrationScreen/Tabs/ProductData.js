import React, { useState } from 'react';
import styled from 'styled-components';
import InputText from '../../../components/InputText';
import InputNumber from '../../../components/InputNumber';
import InputCurrency from '../../../components/InputCurrency';
import { TabContainerStyled } from '../ContainerTabsStyled';

const ProductData = ({ save }) => {
  const {
    nomeProduto, setNomeProduto, estoque, setEstoque,
  } = save;
  return (
    <TabContainerStyled>
      <InputText
        label='Nome do produto'
        state={{ value: nomeProduto, setValue: setNomeProduto }}
      />
      <InputNumber
        label='Estoque'
        state={{ value: estoque, setValue: setEstoque }}
      />
    </TabContainerStyled>
  );
};
export default ProductData;
