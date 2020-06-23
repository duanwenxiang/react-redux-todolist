import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

// const initState = {
//   arr: [1,2,3,4], 
//   obj: {
//     a: 1,
//     b: 2,
//   }
// }

// const new1 = (state = initState, action) => {
//   switch (action.type) {
//     case 'ADD_ARR':
//       state.arr = [...state.arr, ...action.payload]
//       return state      
//     default:
//       return state
//   }
// }

// const new2 = (state = [10, 11], action) => {
//   switch (action.type) {
//     case 'ADD_NEW2':
//       state = action.payload
//       return state      
//     default:
//       return state
//   }
// }

// const rootreducers = combineReducers({
//   new1,
//   new2,
// })



// // console.log(store.getState(), 'store==============1')

// // store.dispatch( { type: 'ADD_NEW2', payload: [100] } )

// // console.log(store.getState(), 'store==============2')

// const getData = () => {
//   return get('http://jsonplaceholder.typicode.com/posts')
// }

// store.dispatch(async (dispatch) => {
//   const res = await getData()
//   dispatch({
//     type: 'ADD_NEW2', 
//     payload: res.data
//   })
// })


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
