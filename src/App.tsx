import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
