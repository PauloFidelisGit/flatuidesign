/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useContentContext } from '../../context/ContentContext';
import ProductData from './Tabs/ProductData';
import FinancialData from './Tabs/FinancialData';
import Button from '../../components/Button';
import {
  ContainerTabsStyled, HeaderStyled, HeaderItemStyled, ContainerProductRegistration, Row,
} from './ContainerTabsStyled';

const ProductRegistration = ({ data }) => {
  console.log(data);

  const { setHeader } = useContentContext();
  useEffect(() => {
    setHeader({ title: 'Cadastro de produtos' });
  }, []);

  const [tab, setTab] = useState('A');
  const [isSucess, setIsSucess] = useState(false);

  const [nomeProduto, setNomeProduto] = useState('');
  const [estoque, setEstoque] = useState('');
  const [precoDeCusto, setPrecoDeCusto] = useState('');
  const [precoDeVenda, setPrecoDeVenda] = useState('');

  useEffect(() => {
    setIsSucess(false);
    if (data) {
      setNomeProduto(data?.nomeProduto);
      setPrecoDeCusto(data?.precoDeCusto);
      setEstoque(data?.estoque);
      setPrecoDeVenda(data?.precoDeVenda);
    }
  }, [nomeProduto, estoque, precoDeCusto, precoDeVenda]);

  const SaveAll = () => {
    setIsSucess(true);
    const newObj = [nomeProduto, estoque, precoDeCusto, precoDeVenda];
    console.log(newObj);
  };

  return (
    <ContainerProductRegistration>
      <ContainerTabsStyled>
        <HeaderStyled>
          <HeaderItemStyled selected={tab === 'A'} onClick={() => setTab('A')}>Dados do produto</HeaderItemStyled>
          <HeaderItemStyled selected={tab === 'B'} onClick={() => setTab('B')}>Informações financeiras</HeaderItemStyled>
        </HeaderStyled>
        {tab === 'A' && (
          <ProductData save={{
            nomeProduto, setNomeProduto, estoque, setEstoque,
          }}
          />
        )}
        {tab === 'B' && (
          <FinancialData save={{
            precoDeCusto, setPrecoDeCusto, precoDeVenda, setPrecoDeVenda,
          }}
          />
        )}
        <Row>
          <Button text='Salvar' onClick={() => SaveAll()} />
          {isSucess && <Sucess>Os dados foram salvos com sucesso!</Sucess>}
        </Row>
      </ContainerTabsStyled>
    </ContainerProductRegistration>
  );
};
export default ProductRegistration;

const anim = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;}
  `;

const Sucess = styled.div`
  margin-top: 15px;
  padding: 10px 0px;
  width: 250px;
  color: var(--primary-text-color);
  opacity: ${({ opacity }) => (opacity || '1')};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${anim};
  animation-duration: 3s;
  opacity: 0;
`;
