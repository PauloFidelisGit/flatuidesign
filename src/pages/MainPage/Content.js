import styled from 'styled-components';

const Content = ({ children }) => (
  <ContentStyled>
    {children}
  </ContentStyled>
);

export default Content;

const ContentStyled = styled.div`
    color: var(--primary-text-color);
    grid-area: content;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;
