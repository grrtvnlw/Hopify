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
import { BreweryData, RootState } from "../index";

import styles from "./Breweries.module.css";
import Navigation from "../Navbar/Navbar";

const Breweries: React.FunctionComponent = (): JSX.Element => {
  const [city, setCity] = useState<string>("");
  const [breweries, setBreweries] = useState<BreweryData[]>([]);
  const favoriteBreweries = useSelector((state: RootState) => {
    return state.favoriteBreweries;
  });
  const wishlistBreweries = useSelector((state: RootState) => {
    return state.wishlistBreweries;
  });
  const dispatch = useDispatch();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((res) => res.json())
      .then((data) => {
        setCity("");
        setBreweries(data);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cityName = e.target.value;
    setCity(cityName);
  };

  return (
    <Container>
      <Navigation />
      <div className={styles.breweryDiv}>
        <h1>Search for a city to find breweries</h1>
        <MappyMap breweries={breweries} />
        {breweries.map((brewery: BreweryData, index: number) => {
          console.log(brewery);
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
                  {favoriteBreweries.find(
                    (favoriteBrewery) => name === favoriteBrewery.name
                  ) ? (
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
                  ) : (
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
                  )}
                  {wishlistBreweries.find(
                    (wishlistBrewery) => name === wishlistBrewery.name
                  ) ? (
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
                  ) : (
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
