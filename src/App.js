import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './App.css'

import Store from './initializers/Store'

const { store } = Store()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div />
      </Provider>
    )
  }
}

export default App
