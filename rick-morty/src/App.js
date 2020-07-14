import React from 'react';
import './App.css';
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoPage from './components/NoPage'
import LayoutPage from './components/LayoutPage'
import Home from './components/Home'
import Login from './components/Login'
import { ProtectedRoute } from './components/ProtectedRoute'


function App() {
  return (
    < Router >
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <ProtectedRoute path="/dashboard" component={LayoutPage} />
        <Route path='/login' component={Login}></Route>
        <Route path="/404" component={NoPage} />
        <Redirect to='/404' />
      </Switch>
    </Router >
  )
}

export default App;


