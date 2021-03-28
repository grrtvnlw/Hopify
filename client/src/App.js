import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Konami from "react-konami-code";

import Beers from "./components/Beers/Beers";
import Breweries from "./components/Breweries/Breweries";
import Home from "./components/Homepage/Home";
import Favorites from "./components/Favorites/Favorites";
import Wishlist from "./components/Wishlist/Wishlist";
import MyModal from "./components/EasterEgg/MyModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [randomBeer, setRandomBeer] = useState("");

  const easterEgg = () => {
    fetch("/random")
      .then((res) => res.json())
      .then((response) => {
        setRandomBeer(response.data);
        setShowModal(true);
      });
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
        <Konami action={easterEgg}>
          <MyModal
            randomBeer={randomBeer}
            show={showModal}
            closeModal={closeModal}
          />
        </Konami>
      </div>
    </Router>
  );
};

export default App;
