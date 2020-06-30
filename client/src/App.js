import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import Breweries from './components/Breweries';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/beers" component={ Beers } />
          <Route path="/breweries" component={ Breweries } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/wishlist" component={ Wishlist } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
