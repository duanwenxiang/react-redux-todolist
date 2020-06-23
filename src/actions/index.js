export const addArr = (content) => (dispatch) => {
  dispatch({
    type: 'ADD_ARR',
    payload: content
  })
}

export const delectArr = (index) => (dispatch) => {
  dispatch({
    type: 'DELETE_ARR',
    payload: index
  })
}
