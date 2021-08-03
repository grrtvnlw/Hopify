import React from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Navbar/Navbar";
import pic from "../../assets/Hops_IPA_Pour-BA-1200.jpg";

import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <Container>
      <Navigation />
      <div className={styles.home}>
        <header>
          <h1>
            H
            <span role="img" aria-label="hop">
              🌳
            </span>
            pify
          </h1>
          <h3>Find beers and breweries in your city</h3>
        </header>
        <img src={pic} alt="" className={styles.banner} />
      </div>
    </Container>
  );
};

export default Home;
