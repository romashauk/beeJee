import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Authorization from './components/Authorization/Authorization';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Authorization} exact />
      </Switch>
    );
  }
}

export default App;
