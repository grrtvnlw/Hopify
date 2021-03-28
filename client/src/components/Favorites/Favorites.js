import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Button, Container, Card } from "react-bootstrap";

import {
  addFavoriteBeer,
  deleteFavoriteBeer,
  addFavoriteBrewery,
  deleteFavoriteBrewery,
  addWishlistBeer,
  deleteWishlistBeer,
  addWishlistBrewery,
  deleteWishlistBrewery,
} from "../../redux/action";

import styles from "../Beers/Beers.module.css";

const Favorites = () => {
  const favoriteBeers = useSelector((store) => {
    return store.favoriteBeers;
  });
  const favoriteBreweries = useSelector((store) => {
    return store.favoriteBreweries;
  });
  const wishlistBeers = useSelector((store) => {
    return store.wishlistBeers;
  });
  const wishlistBreweries = useSelector((store) => {
    return store.wishlistBreweries;
  });
  const dispatch = useDispatch();

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
        </Navbar.Collapse>
      </Navbar>
      <div className={styles.favDiv}>
        <h1>Favorite Beers and Breweries</h1>
        <h2>Beers</h2>
        {favoriteBeers.map((beer, index) => {
          const {
            name,
            abv,
            ibu,
            breweryLink,
            brewery,
            image,
            link,
            description,
          } = beer;
          return (
            <Card className={styles.beerCard} key={index}>
              <div className={styles.wrapper}>
                <div className={styles.left}>
                  <h3>{name}</h3>
                  <p className={styles.description}>{description}</p>
                  <ul>
                    <li>
                      <b>ABV: </b>
                      {abv}
                    </li>
                    <li>
                      <b>IBU: </b>
                      {ibu}
                    </li>
                    <li>
                      <b>Brewer: </b>
                      <a
                        href={breweryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {brewery}
                      </a>
                    </li>
                  </ul>
                  {favoriteBeers.findIndex(
                    (favorite) => name === favorite.name
                  ) === -1 ? (
                    <Button
                      variant="success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(addFavoriteBeer(beer));
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
                        dispatch(deleteFavoriteBeer(beer));
                      }}
                    >
                      Unfavorite{" "}
                      <span role="img" aria-label="beer">
                        🍺
                      </span>
                    </Button>
                  )}
                  {wishlistBeers.findIndex(
                    (favorite) => name === favorite.name
                  ) === -1 ? (
                    <Button
                      variant="success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(addWishlistBeer(beer));
                      }}
                    >
                      Wishlist{" "}
                      <span role="img" aria-label="hop">
                        🌳
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="outline-success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(deleteWishlistBeer(beer));
                      }}
                    >
                      Unwishlist{" "}
                      <span role="img" aria-label="hop">
                        🌳
                      </span>
                    </Button>
                  )}
                </div>
                <div className={styles.right}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} className={styles.beerImage} alt="" />
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
        <h2>Breweries</h2>
        {favoriteBreweries.map((brewery, index) => {
          const {
            name,
            brewery_type,
            street,
            city,
            state,
            phone,
            website_url,
          } = brewery;

          return (
            <Card className={styles.breweryCard} key={index}>
              <div className={styles.wrapper}>
                <div>
                  <Card.Title className={styles.title}>
                    {name && <h3>{name}</h3>}
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
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Favorites;
