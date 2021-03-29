import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Card,
} from "react-bootstrap";

import {
  addFavoriteBeer,
  deleteFavoriteBeer,
  addWishlistBeer,
  deleteWishlistBeer,
} from "../../redux/action";
import beerData from "../../data/beerData";
import { RootState, BeerData } from "../index";

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

  const selectCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    let selectedCity = e.target.value;
    setCity(selectedCity);
  };

  const selectStyle = (
    _: React.ChangeEvent<HTMLInputElement>,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
      <Navbar bg="dark" variant="dark" expand="lg" className={styles.colorNav}>
        <Navbar.Brand href="/" className={styles.navBrand}>
          Hopify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/beers">Beers</Nav.Link>
            <NavDropdown
              title="Styles"
              id="basic-nav-dropdown"
              onSelect={selectStyle}
            >
              <NavDropdown.Item eventKey="IPA">IPA</NavDropdown.Item>
              <NavDropdown.Item eventKey="Wheat">Wheat</NavDropdown.Item>
              <NavDropdown.Item eventKey="Sour">Sour</NavDropdown.Item>
              <NavDropdown.Item eventKey="Ale">Ale</NavDropdown.Item>
              <NavDropdown.Item eventKey="Lager">Lager</NavDropdown.Item>
              <NavDropdown.Item eventKey="Pilsner">Pilsner</NavDropdown.Item>
              <NavDropdown.Item eventKey="Stout">Stout</NavDropdown.Item>
              <NavDropdown.Item eventKey="Porter">Porter</NavDropdown.Item>
              <NavDropdown.Item eventKey="Seltzer">Seltzer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="All Beer">All Beer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/breweries">Breweries</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="/wishlist">Wishlist</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Enter a city"
              className="mr-sm-2"
              value={city}
              onChange={selectCity}
            />
            <Button type="submit" variant="outline-primary" onClick={clearForm}>
              Clear
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className={styles.beerDiv}>
        <h1>Select a style and a city to find beers</h1>
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
                    (favoriteBeer) => name === favoriteBeer.name
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
                    (wishlistBeer) => name === wishlistBeer.name
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
