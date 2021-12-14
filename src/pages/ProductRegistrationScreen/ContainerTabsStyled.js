import styled from 'styled-components';

export const ContainerTabsStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const HeaderStyled = styled.div`
  color: var(--quaternary-text-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #33334C;
`;
export const HeaderItemStyled = styled.div`
flex: 1;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
cursor: pointer;
background-color: ${({ selected }) => (selected ? 'var(--primary-color)' : '#33334C')};
&:hover{
  background-color: var(--primary-color);
}
`;
export const TabContainerStyled = styled.div`
  border: 1px solid #CCCCCC;
  padding: 20px;
`;
export const ContainerProductRegistration = styled.div`
  grid-area: conteudo;
  padding: 20px;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
