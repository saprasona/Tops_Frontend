import React from 'react';
import { Provider } from 'react-redux';
import Home from './Home';
import { store } from './crud/app';

export default function AppRedux3() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}
