import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import Package from './Package';
import './App.scss';

const App = () => (
  <Switch>
    <Route path="/package/:id" render={Package} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
