import React from 'react'
import Home from './Home'
import { Provider } from 'react-redux'
import { store } from './crud/app'

export default function AppRedux2() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
