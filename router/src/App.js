import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, } from 'react-router-dom';
import History from './History';
import Home from './Home';
import NavBar from './NavBar';

class App extends Component {
  render() {

      return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/notre-histoire" component={History} />
            </Switch>
          </BrowserRouter>
      );
  }
}

export default App;