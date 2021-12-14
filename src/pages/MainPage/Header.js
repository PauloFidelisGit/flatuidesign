import styled from 'styled-components';
import { useContentContext } from '../../context/ContentContext';

const Header = () => {
  const { header } = useContentContext();
  const { title } = header;
  return <HeaderStyled>{title}</HeaderStyled>;
};
export default Header;

const HeaderStyled = styled.div`
    background-color: var(--primary-color);
    color: var(--quaternary-text-color);
    grid-area: header;
    font-weight: bold;
    display: grid;
    place-content: center;
    font-size: 2rem;
`;
