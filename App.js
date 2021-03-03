// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import decksReducer from './src/reducers/Decks'
import { MainStack } from './navigationStack';

const store = createStore(decksReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider> 
  );
}

