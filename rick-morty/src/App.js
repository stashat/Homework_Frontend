import React from 'react';
import './App.css';
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoPage from './components/NoPage'
import LayoutPage from './components/LayoutPage'


function App() {
  return (<div>

    < Router >

      <Switch>
        <Route exact path="/" component={LayoutPage}></Route>
        <Route path="/404" component={NoPage} />
        <Redirect to='/404' />
      </Switch>
    </Router >
  </div>)
}


export default App;


