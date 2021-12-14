import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainPage from './pages/MainPage';
import reducers from './components/Reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root'),
);
