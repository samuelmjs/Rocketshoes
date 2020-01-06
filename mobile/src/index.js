import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';
import NavigationServices from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes
        ref={navigatorRef => NavigationServices.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
