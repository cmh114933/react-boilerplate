import { applyMiddleware, createStore as ReduxCreateStore } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from '../ducks'
import Reactotron from './ReactotronConfig'

const middleware = applyMiddleware(thunk)

const createStore =
  process.env.NODE_ENV == 'development'
    ? Reactotron.createStore
    : ReduxCreateStore

export default () => {
  let store = createStore(RootReducer, middleware)
  return { store }
}
