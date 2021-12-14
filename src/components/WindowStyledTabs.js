import React, { useState } from 'react';
import styled from 'styled-components';

import InputText from './InputText';

const WindowStyledTabs = ({ label, children, width }) => {
  const [tab, setTab] = useState('A');
  return (
    <ContainerTabs>
      <HeaderStyled>
        <HeaderItemStyled onClick={() => setTab('A')}>Tab-A</HeaderItemStyled>
        <HeaderItemStyled onClick={() => setTab('B')}>Tab-B</HeaderItemStyled>
        <HeaderItemStyled onClick={() => setTab('C')}>Tab-C</HeaderItemStyled>
        <HeaderItemStyled onClick={() => setTab('D')}>Tab-D</HeaderItemStyled>
      </HeaderStyled>

      {tab === 'A'
        && (
          <TabContainer>
            TabA
          </TabContainer>
        )}
      {tab === 'B'
        && (
          <TabContainer>
            TabB
          </TabContainer>
        )}
      {tab === 'C'
        && (
          <TabContainer>
            TabC
          </TabContainer>
        )}
      {tab === 'D'
        && (
          <TabContainer>
            TabD
          </TabContainer>
        )}
    </ContainerTabs>
  );
};

export default WindowStyledTabs;

const ContainerTabs = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const HeaderStyled = styled.div`
    color: var(--quaternary-text-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #33334C;
  `;
const HeaderItemStyled = styled.div`
    flex: 1;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
            background-color: var(--primary-color);
        }
  `;

const TabContainer = styled.div`
  border: 1px solid #CCCCCC;
  padding: 20px;
`;
