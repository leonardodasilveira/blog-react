import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Wrapper from './components/wrapper'
import Home from './containers/home'
import Posts from './containers/posts'

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={Posts} />

          <Route path='*' render={() => <Redirect to='/' />} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App