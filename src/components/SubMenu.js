import styled from 'styled-components';

const SubMenu = () => (
  <Container>
    <NavStyled>
      <NavItem>Cadastro de produtos</NavItem>
      <NavItem>Item C</NavItem>
      <NavItem>Item D</NavItem>
      <NavItem>Item E</NavItem>
    </NavStyled>
  </Container>
);

export default SubMenu;
const Container = styled.div`
  grid-area: subnav;
  height: 100%;
  background-color: #33334C;
`;
const NavStyled = styled.div`
    background-color: #33334C;
    grid-area: nav;

`;
const NavItem = ({ children, onClick }) => (
  <NavItemStyled onClick={onClick}>{children}</NavItemStyled>
);
const NavItemStyled = styled.div`
  color: white;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  transition: ease-in all 0.2s;
  font-size: 1.1rem;
  &:hover{
      background-color: var(--primary-color);
  }
`;
