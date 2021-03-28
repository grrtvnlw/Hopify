import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Card,
} from "react-bootstrap";

import {
  addFavoriteBrewery,
  deleteFavoriteBrewery,
  addWishlistBrewery,
  deleteWishlistBrewery,
} from "../../redux/action";
import MappyMap from "../Map/MappyMap";

import styles from "./Breweries.module.css";

const Breweries = () => {
  const [city, setCity] = useState("");
  const [breweries, setBreweries] = useState([]);
  const favoriteBreweries = useSelector((store) => {
    return store.favoriteBreweries;
  });
  const wishlistBreweries = useSelector((store) => {
    return store.wishlistBreweries;
  });
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((res) => res.json())
      .then((data) => {
        setCity("");
        setBreweries(data);
      });
  };

  const handleChange = (e) => {
    const cityName = e.target.value;
    setCity(cityName);
  };

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg" className={styles.colorNav}>
        <Navbar.Brand href="/" className={styles.navBrand}>
          Hopify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/beers">Beers</Nav.Link>
            <Nav.Link href="/breweries">Breweries</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
          </Nav>
          <Form inline onSubmit={handleFormSubmit}>
            <FormControl
              type="text"
              placeholder="Enter a city"
              className="mr-sm-2"
              value={city}
              onChange={handleChange}
            />
            <Button variant="outline-primary" onClick={handleFormSubmit}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className={styles.breweryDiv}>
        <h1>Search for a city to find breweries</h1>
        <MappyMap breweries={breweries} />
        {breweries.map((brewery, index) => {
          const {
            name,
            brewery_type,
            street,
            city,
            state,
            phone,
            website_url,
          } = brewery;
          if (brewery_type !== "planning") {
            return (
              <Card className={styles.breweryCard} key={index}>
                <Card.Body>
                  <div>
                    <Card.Title className={styles.title}>
                      {name && <h2>{name}</h2>}
                    </Card.Title>
                    <Card.Text>
                      {brewery_type && <p>Type: {brewery_type}</p>}
                      {street && (
                        <p>
                          Address: {street}, {city}, {state}
                        </p>
                      )}
                      {phone && <p>Phone: {phone}</p>}
                      {website_url && (
                        <p>
                          Website:{" "}
                          <a
                            href={website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {website_url}
                          </a>
                        </p>
                      )}
                    </Card.Text>
                  </div>
                  {favoriteBreweries.findIndex(
                    (favorite) => name === favorite.name
                  ) === -1 ? (
                    <Button
                      variant="success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(addFavoriteBrewery(brewery));
                      }}
                    >
                      Favorite{" "}
                      <span role="img" aria-label="beer">
                        🍺
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="outline-success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(deleteFavoriteBrewery(brewery));
                      }}
                    >
                      Unfavorite{" "}
                      <span role="img" aria-label="beer">
                        🍺
                      </span>
                    </Button>
                  )}
                  {wishlistBreweries.findIndex(
                    (favorite) => name === favorite.name
                  ) === -1 ? (
                    <Button
                      variant="success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(addWishlistBrewery(brewery));
                      }}
                    >
                      Wishlist{" "}
                      <span role="img" aria-label="hops">
                        🌳
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="outline-success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(deleteWishlistBrewery(brewery));
                      }}
                    >
                      Unwishlist{" "}
                      <span role="img" aria-label="hops">
                        🌳
                      </span>
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          }
          return "";
        })}
      </div>
    </Container>
  );
};

export default Breweries;
