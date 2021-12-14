import { useEffect } from 'react';
import styled from 'styled-components';
import { useContentContext } from '../../context/ContentContext';

const HomeScreen = () => {
  const { setHeader } = useContentContext();
  useEffect(() => {
    setHeader({ title: 'Tela de vendas' });
  }, []);
  return (
    <Container>
      HomeScreen
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
`;
