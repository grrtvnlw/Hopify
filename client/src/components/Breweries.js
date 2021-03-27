import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addFavoriteBrewery,
  deleteFavoriteBrewery,
  addWishlistBrewery,
  deleteWishlistBrewery,
  addBreweries,
  addMapCity,
} from "./redux/action";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import styles from "./Breweries.module.css";
import MappyMap from "./MappyMap";

class Breweries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "",
      breweries: [],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let city = this.state.cityName;
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cityName: "",
          breweries: data,
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          className={styles.colorNav}
        >
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
            <Form inline onSubmit={this.handleFormSubmit}>
              <FormControl
                type="text"
                placeholder="Enter a city"
                className="mr-sm-2"
                value={this.state.cityName}
                onChange={this.handleChange}
              />
              <Button variant="outline-primary" onClick={this.handleFormSubmit}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className={styles.breweryDiv}>
          <h1>Search for a city to find breweries</h1>
          <MappyMap breweries={this.state.breweries} />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBreweries: state.favoriteBreweries,
    wishlistBreweries: state.wishlistBreweries,
    breweries: state.breweries,
    mapCity: state.mapCity,
  };
};

const mapDispatchToProps = {
  addFavoriteBrewery,
  deleteFavoriteBrewery,
  addWishlistBrewery,
  deleteWishlistBrewery,
  addBreweries,
  addMapCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Breweries);
