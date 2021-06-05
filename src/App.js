import React from 'react';
import MainNavigation from './components/Main/MainNavigation';
import store from './redux/store';
import {Provider} from 'react-redux';
import Footer from './components/Footer/Footer';

export default App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
      <Footer />
    </Provider>
  );
};
