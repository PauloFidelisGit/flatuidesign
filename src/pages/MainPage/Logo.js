import styled from 'styled-components';

const Logo = () => <LogoStyled>Logo</LogoStyled>;

export default Logo;

const LogoStyled = styled.div`
    background-color: var(--secondary-color);
    grid-area: logo;
    display: grid;
    place-content: center;
    color: var(--quaternary-text-color);
`;
