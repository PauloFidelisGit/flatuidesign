import React from 'react';
import styled from 'styled-components';

const WindowStyled = ({ label, children, width }) => (
  <Container width={width}>
    {label ? <Label label={label}>{label}</Label> : <Label />}
    <SubContainer>{children}</SubContainer>
  </Container>
);

export default WindowStyled;

const Container = styled.div`
    border: 1px solid var(--primary-color);
    padding: 10px;
    margin-bottom: 20px;
    background-color: #fff;
    width: ${({ width }) => (width || 'auto')};
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;

`;
const Label = styled.div`
    width: fit-content;
    margin-top: ${({ label }) => (label ? '-20px' : '-10px')};
    background-color: #fff;
    margin-bottom: 10px;
    padding-left: 3px;
    padding-right: 3px;
`;
