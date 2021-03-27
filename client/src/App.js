import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Konami from "react-konami-code";

import Beers from "./components/Beers/Beers";
import Breweries from "./components/Breweries/Breweries";
import Home from "./components/Homepage/Home";
import Favorites from "./components/Favorites/Favorites";
import Wishlist from "./components/Wishlist/Wishlist";
import MyModal from "./components/EasterEgg/MyModal";

import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      random: "",
      show: false,
    };
  }

  easterEgg = () => {
    fetch("/random")
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          random: response.data,
          show: true,
        });
      });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/beers" component={Beers} />
            <Route path="/breweries" component={Breweries} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/wishlist" component={Wishlist} />
          </Switch>
          <Konami action={this.easterEgg}>
            <MyModal
              randomBeer={this.state.random}
              show={this.state.show}
              closeModal={this.closeModal}
            />
          </Konami>
        </div>
      </Router>
    );
  }
}
