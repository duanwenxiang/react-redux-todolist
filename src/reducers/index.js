import { combineReducers } from 'redux'

const reduxList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARR':
      return [...state, action.payload]
    case 'DELETE_ARR':
      state.splice(action.payload, 1)
      return [...state]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  reduxList
})

export default rootReducer
