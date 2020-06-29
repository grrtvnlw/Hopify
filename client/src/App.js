import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import Breweries from './components/Breweries';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/beers" component={ Beers } />
          <Route path="/breweries" component={ Breweries } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
