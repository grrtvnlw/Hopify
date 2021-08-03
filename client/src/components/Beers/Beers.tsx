import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Card, Form } from "react-bootstrap";

import FloatingLabel from "react-bootstrap-floating-label";

import beerData from "../../data/beerData";
import { RootState, BeerData } from "../index";
import Navigation from "../Navbar/Navbar";

import {
  addFavoriteBeer,
  deleteFavoriteBeer,
  addWishlistBeer,
  deleteWishlistBeer,
} from "../../redux/action";

import styles from "./Beers.module.css";

const Beers: React.FunctionComponent = (): JSX.Element => {
  const [city, setCity] = useState<string>("");
  const [style, setStyle] = useState<string | null>("All Beer");
  const [beerList, setBeerList] = useState<Array<BeerData>>(beerData);
  const favoriteBeers = useSelector((state: RootState) => {
    return state.favoriteBeers;
  });
  const wishlistBeers = useSelector((state: RootState) => {
    return state.wishlistBeers;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    let filteredBeers;
    if (style && city) {
      if (style === "All Beer") {
        filteredBeers = beerData.filter((x) => x.city === city);
        setBeerList(filteredBeers);
      } else {
        filteredBeers = beerData.filter(
          (x) => x.city === city && x.style === style
        );
        setBeerList(filteredBeers);
      }
    } else if (!style && city) {
      setStyle("All Beer");
      filteredBeers = beerData.filter((x) => x.city === city);
      setBeerList(filteredBeers);
    } else if (style === "All Beer" && !city) {
      setBeerList(beerData);
    } else if (style && style !== "All Beer") {
      filteredBeers = beerData.filter((x) => x.style === style);
      setBeerList(filteredBeers);
    } else {
      setBeerList(beerData);
    }
  }, [city, style]);

  const selectCity = (e: any) => {
    let selectedCity = e.target.value;
    setCity(selectedCity);
  };

  const selectStyle = (e: any) => {
    let selectedStyle = e.target.textContent;
    setStyle(selectedStyle);
  };

  const clearForm = (e: any) => {
    e.preventDefault();
    setBeerList(beerData);
    setCity("");
    setStyle("All Beer");
  };

  return (
    <Container>
      <Navigation />
      <div className={styles.beerDiv}>
        <h1>Select a style and a city to find beers</h1>
        <div className={styles.inputContainer}>
          <FloatingLabel label="Style" className="mb-3">
            <Form.Control
              type="text"
              placeholder="IPA"
              onChange={selectStyle}
            />
          </FloatingLabel>
          <FloatingLabel label="City">
            <Form.Control
              type="text"
              placeholder="Denver"
              onChange={selectCity}
            />
          </FloatingLabel>
        </div>
        <div className={styles.specialDiv}>
          {style && style + "s"} {city && "in " + city}
        </div>
        {beerList.map((beer, index) => {
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
                  <h2>{name}</h2>
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
                  {favoriteBeers.find(
                    (favoriteBeer: any) => name === favoriteBeer.name
                  ) ? (
                    <Button
                      variant="outline-success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(deleteFavoriteBeer(beer));
                      }}
                    >
                      Unfavorite{" "}
                      <span role="img" aria-label="hop">
                        🍺
                      </span>
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      className={styles.button}
                      onClick={() => {
                        dispatch(addFavoriteBeer(beer));
                      }}
                    >
                      Favorite{" "}
                      <span role="img" aria-label="hop">
                        🍺
                      </span>
                    </Button>
                  )}
                  {wishlistBeers.find(
                    (wishlistBeer: any) => name === wishlistBeer.name
                  ) ? (
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
                  ) : (
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
      </div>
    </Container>
  );
};

export default Beers;
