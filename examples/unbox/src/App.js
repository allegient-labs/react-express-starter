import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import Repo from './Repo';
import './App.scss';

const App = () => (
  <Switch>
    <Route path="/repos/:owner/:repo" render={Repo} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
