import React from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <NavStyled>
      <NavItemStyled to="/">Página inicial</NavItemStyled>
      <NavItemStyled to="/reg">Cadastro de produtos</NavItemStyled>
      <NavItemStyled to="/reg2">Cadastro de produtos</NavItemStyled>
    </NavStyled>
  );
};
export default Nav;

const NavStyled = styled.div`
    background-color: #33334C;
    grid-area: nav;
`;

const NavItemStyled = styled(NavLink)`
  color: var(--quaternary-text-color);
  text-decoration: none;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  transition: ease-in all 0.2s;
  font-size: 1rem;

  &:hover{
      background-color: var(--primary-color);
  }
  &.active {
    background-color: var(--primary-color);
    font-weight: bold;
    /* &:after{
      content: '->';
      margin-left: auto;
    } */
  }
  `;
