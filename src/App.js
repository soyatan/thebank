import React from 'react';
import MainNavigation from './components/Main/MainNavigation';
import store from './redux/store';
import {Provider} from 'react-redux';
import Footer from './components/Footer/Footer';
import {StatusBar} from 'react-native';
import {Colors} from './constants/Colors';

export default App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
      <Footer />
    </Provider>
  );
};
