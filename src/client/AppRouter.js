//MODULES
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

//SCREENS
import Home from './screens/Home/index'
import Portfolio from './screens/Portfolio'

//CONFIG
import {
  TOKEN
} from './config'
 
//COMPONENT
export default class AppRouter extends Component {
  componentWillMount() {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(TOKEN);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/portfolio/:id" component={Portfolio} />
          <Redirect from="/" to="/home" exact />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}