import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductRegistrationScreen from '../ProductRegistrationScreen';
import Content from './Content';
import Header from './Header';
import ContentContextProvider from '../../context/ContentContext';
import Logo from './Logo';
import Nav from './Nav';
import HomeScreen from '../HomeScreen';
import SubMenu from '../../components/SubMenu';

/* const obj = {
  nomeProduto: 'Marmita P', estoque: 10, precoDeCusto: 20.5, precoDeVenda: 35,
}; */

const MainPage = () => (
  <Container>
    <Logo />
    <ContentContextProvider>
      <BrowserRouter>
        <Nav />
        <Header />
        <Content>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/reg' element={<ProductRegistrationScreen />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </ContentContextProvider>
  </Container>
);

export default MainPage;

const Container = styled.div`
    display: grid;
    height: 100vh;
    grid-template-areas:
    'logo header'
    'nav content';
    grid-template-rows: 60px 1fr;
    grid-template-columns: 220px 1fr;
    color: var(--quaternary-text-color);
`;
