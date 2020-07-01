import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addFavoriteBeer, deleteFavoriteBeer, addWishlistBeer, deleteWishlistBeer } from './redux/action';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Card } from 'react-bootstrap'
import styles from './Beers.module.css';

class Beers extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      cityName: '',
      styleName: '',
      beers: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { cityName: city, styleName: style } = this.state
    fetch(`/api/v1/beers?city=${city}&style=${style}`)
      .then(res => res.json())
      .then(data => {
          this.setState({
            // cityName: '',
            style: '',
            beers: data
          })
        })
  }
  
  // handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   let city = this.state.cityName
  //   fetch(`/api/v1/beer/${city}`)
  //     .then(res => res.json())
  //     .then(data => {
  //         this.setState({
  //           cityName: '',
  //           beers: data
  //         })
  //       })
  // }

  handleChange = (e) => {
    this.setState({
      cityName: e.target.value
    })
  }

  // fetchData = (empty, e) => {
  //   let style = e.target.textContent
  //   fetch(`/api/v1/beer/${style}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         beers: data
  //       })
  //     })
  // }

  saveData = (empty, e) => {
    let style = e.target.textContent
    this.setState({
      styleName: style
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
              <NavDropdown title="Styles" id="basic-nav-dropdown" onSelect={this.saveData}>
                <NavDropdown.Item value='IPA'>IPA</NavDropdown.Item>
                <NavDropdown.Item value='Wheat'>Wheat</NavDropdown.Item>
                <NavDropdown.Item value='Sour'>Sour</NavDropdown.Item>
                <NavDropdown.Item value='Lager'>Lager</NavDropdown.Item>
                <NavDropdown.Item value='Pilsner'>Pilsner</NavDropdown.Item>
                <NavDropdown.Item value='Stout'>Stout</NavDropdown.Item>
                <NavDropdown.Item value='Porter'>Porter</NavDropdown.Item>
                <NavDropdown.Item value='Seltzer'>Seltzer</NavDropdown.Item>
              </NavDropdown>
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
        <div className={ styles.beerDiv }>
          <h1>Select a style and a city to find beers</h1>
          { this.state.beers.map((beer, index) => {
            return (
              <Card className={ styles.beerCard } key={index}>
                <div className={ styles.wrapper }>
                  <div className={ styles.left }>
                    <h2>{ beer.name }</h2> 
                    <p className={ styles.description }>{ beer.description }</p>
                    <ul>
                      <li><b>ABV: </b>{ beer.abv }</li>
                      <li><b>IBU: </b>{ beer.ibu }</li>
                      <li><b>Brewer: </b><a href={ beer.breweryLink }>{ beer.brewery }</a></li>
                    </ul>
                    {
                    this.props.favoriteBeers.findIndex((favorite) => beer.name === favorite.name) === -1 ? 
                      <Button variant="success" className={ styles.button } onClick={() => {this.props.addFavoriteBeer(beer)}}>Favorite <span>🍺</span></Button> 
                    :
                      <Button variant="outline-success" className={styles.button} onClick={() => {this.props.deleteFavoriteBeer(beer)}}>Unfavorite <span>🍺</span></Button>
                    }
                    {
                    this.props.wishlistBeers.findIndex((favorite) => beer.name === favorite.name) === -1 ? 
                      <Button variant="success" className={ styles.button } onClick={() => {this.props.addWishlistBeer(beer)}}>Wishlist <span>🌳</span></Button> 
                    :
                      <Button variant="outline-success" className={styles.button} onClick={() => {this.props.deleteWishlistBeer(beer)}}>Unwishlist <span>🌳</span></Button>
                    }
                  </div>
                  <div className={ styles.right }>
                    <a href={ beer.link }><img src={ beer.image} /></a>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBeers: state.favoriteBeers,
    wishlistBeers: state.wishlistBeers
  }
}

const mapDispatchToProps = {
  addFavoriteBeer,
  deleteFavoriteBeer,
  addWishlistBeer,
  deleteWishlistBeer
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beers)
