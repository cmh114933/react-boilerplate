import { combineReducers } from 'redux'

import TempReducer from './temp'

export const reducers = {
  temp: TempReducer
}

const appReducer = combineReducers(reducers)

export default (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}
