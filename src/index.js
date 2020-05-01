import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar } from 'react-native';
import store from './store';

import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </>
    </Provider>
  );
}
// No estilo do StatusBar, local onde fica hora, sinal de wi-fi, bateria e outros, posso usar dark ou light-content.
