import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addArr, delectArr } from '../../actions'

const ReduxTodolist = (props) => {
  const [val, setVal] = useState('')
  console.log(props)
  return (
    <div>
      <input 
        type='text' 
        value={val}
        onChange={(e) => {
          setVal(e.target.value)
        }}
      />
      <button style={{marginLeft: '10px'}} onClick={() => {
        props.dispatch(addArr(val))
        setVal('')
      }}>添加</button>
      <ul>
        {
          props.reduxList.map((x, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <span>{x}</span> 
              <button style={{marginLeft: '15px'}} onClick={() => {
                props.dispatch(delectArr(index))
              }}>删除</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    reduxList: state.reduxList
  }
}

export default connect(mapStateToProps)(ReduxTodolist)
