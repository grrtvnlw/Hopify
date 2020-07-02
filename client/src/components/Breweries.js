import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addFavoriteBrewery, deleteFavoriteBrewery, addWishlistBrewery, deleteWishlistBrewery, addBreweries, addMapCity } from './redux/action';
import { Navbar, Nav, Form, FormControl, Button, Container, Card } from 'react-bootstrap'
import styles from './Breweries.module.css';
import MappyMap from './MappyMap';

class Breweries extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      cityName: '',
      breweries: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let city = this.state.cityName
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then(res => res.json())
      .then(data => {
          this.setState({
            breweries: data,
            cityName: ''
          })
        })
  }

  handleChange = (e) => {
    this.setState({
      cityName: e.target.value
    })
  }
  
  render() {
    return (
      <Container>
        <Navbar bg="dark" variant="dark" expand="lg" className={ styles.colorNav }>
          <Navbar.Brand href="/" className={ styles.navBrand }>Hopify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/beers">Beers</Nav.Link>
              <Nav.Link href="/breweries">Breweries</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
              <Nav.Link href="/wishlist">Wishlist</Nav.Link>
            </Nav>
            <Form inline onSubmit={ this.handleFormSubmit }>
              <FormControl type="text" placeholder="Enter a city" className="mr-sm-2" value={ this.state.cityName } onChange={ this.handleChange } />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className={ styles.breweryDiv }>
          <h1>Search for a city to find breweries</h1>
          <MappyMap breweries={ this.state.breweries } />
          { this.state.breweries.map((brewery, index) => {
            const { name, brewery_type, street, city, state, phone, website_url } = brewery;
            if (brewery_type !== 'planning') { 
            return (
              <Card className={ styles.breweryCard } key={ index }>
                <Card.Body>
                  <div>
                    <Card.Title className={ styles.title }>
                      { name && <h2>{ name }</h2> }
                    </Card.Title>
                    <Card.Text>
                      { brewery_type && <p>Type: { brewery_type }</p> }
                      { street && <p>Address: { street }, { city }, { state }</p> }
                      { phone && <p>Phone: { phone }</p> }
                      { website_url && <p>Website: <a href={ website_url } target="_blank">{ website_url }</a></p> }
                    </Card.Text>
                  </div>
                    {
                    this.props.favoriteBreweries.findIndex((favorite) => name === favorite.name) === -1 ? 
                      <Button variant="success" className={ styles.button } onClick={() => {this.props.addFavoriteBrewery(brewery)}}>Favorite <span>🍺</span></Button> 
                    :
                      <Button variant="outline-success" className={styles.button} onClick={() => {this.props.deleteFavoriteBrewery(brewery)}}>Unfavorite <span>🍺</span></Button>
                    }
                    {
                    this.props.wishlistBreweries.findIndex((favorite) => name === favorite.name) === -1 ? 
                      <Button variant="success" className={ styles.button } onClick={() => {this.props.addWishlistBrewery(brewery)}}>Wishlist <span>🌳</span></Button> 
                    :
                      <Button variant="outline-success" className={styles.button} onClick={() => {this.props.deleteWishlistBrewery(brewery)}}>Unwishlist <span>🌳</span></Button>
                    }
                </Card.Body>
              </Card>
            )}
          })}
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBreweries: state.favoriteBreweries,
    wishlistBreweries: state.wishlistBreweries,
    breweries: state.breweries,
    mapCity: state.mapCity
  }
}

const mapDispatchToProps = {
  addFavoriteBrewery,
  deleteFavoriteBrewery,
  addWishlistBrewery,
  deleteWishlistBrewery,
  addBreweries,
  addMapCity
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Breweries)