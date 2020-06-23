import React from 'react';
import { Route, Switch, Redirect, BrowserRouter , Link } from 'react-router-dom'
import ReduxTodolist from './views/reduxTodolist'
import MobxTodolist from './views/mobxTodolist'

function App(props) {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to='/redux-todolist'>ReduxTodolist</Link>
        </li>
        <li>
          <Link to='/mobx-todolist'>MobxTodolist</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/redux-todolist' component={ReduxTodolist} />
        <Route path='/mobx-todolist' component={MobxTodolist} />
        <Redirect path='/' to='/redux-todolist' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
