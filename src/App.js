import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './redux/config/index';

import DashBoard from './components/dashBoard/index';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <DashBoard />
    </Provider>
  );
}

export default App;
