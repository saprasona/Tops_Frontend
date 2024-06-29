import React from 'react';
import { Provider } from 'react-redux';
import Home from './Home';
import { store } from './app';

export default function AppRedux() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}
