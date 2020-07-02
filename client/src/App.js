import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import Breweries from './components/Breweries';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Wishlist from './components/Wishlist';
import Konami from 'react-konami-code';
import MyModal from './components/MyModal';
// import Konami from './components/Konami';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      random: '',
      show: false
    }
  }
  
  easterEgg = () => {
    fetch('/random')
    .then(res => res.json())
      .then(response => {
        console.log(response)
        this.setState({
          random: response.data,
          show: true
        })
        })
  }

  closeModal = () => {
    this.setState({
      show: false
    })
  }

  render() {
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
          <Konami action={this.easterEgg}>
            <MyModal randomBeer={ this.state.random } show={ this.state.show } closeModal={ this.closeModal }/>
          </Konami>
        </div>
      </Router>
    )
  }
  // return (
  //   <Router>
  //     <div>
  //       <Switch>
  //         <Route path="/" exact component={ Home } />
  //         <Route path="/beers" component={ Beers } />
  //         <Route path="/breweries" component={ Breweries } />
  //         <Route path="/favorites" component={ Favorites } />
  //         <Route path="/wishlist" component={ Wishlist } />
  //       </Switch>
  //       <Konami />
  //     </div>
  //   </Router>
  // );
}

// export default App;
