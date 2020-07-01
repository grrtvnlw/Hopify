import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Navbar, Nav, Button, Container, Card } from 'react-bootstrap'
import { deleteFavoriteBeer, deleteFavoriteBrewery } from './redux/action';
// import styles from './Favlist.module.css';
import styles from './Beers.module.css';

class Favorites extends Component {
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
            </Navbar.Collapse>
          </Navbar>
          <div className={ styles.favDiv }>
            <h1>Favorite Beers and Breweries</h1>
            <h2>Beers</h2>
            { this.props.favoriteBeers.map((beer, index) => {
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
                      {this.props.favoriteBeers.findIndex((favorite) => beer.name === favorite.name) === -1 ? 
                        <Button variant="success" className={ styles.button } onClick={() => {this.props.addFavoriteBeer(beer)}}>Favorite <span>🍺</span></Button> 
                      :
                        <Button variant="outline-success" className={styles.button} onClick={() => {this.props.deleteFavoriteBeer(beer)}}>Unfavorite <span>🍺</span></Button>
                      }
                      {/* <Button variant="success" className={ styles.button }>Favorite 🍺</Button>  */}
                      <Button variant="success" className={ styles.button }>Wishlist 🌳</Button> 
                    </div>
                    <div className={ styles.right }>
                      <a href={ beer.link }><img src={ beer.image} /></a>
                    </div>
                  </div>
                </Card>
              )
            })}
            <h2>Breweries</h2>
            { this.props.favoriteBreweries.map((brewery, index) => {
              return (
                <Card key={index}>
                  <Card.Title>{brewery.name}</Card.Title>
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
    favoriteBreweries: state.favoriteBreweries
  }
}

const mapDispatchToProps = {
  deleteFavoriteBeer,
  deleteFavoriteBrewery
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);

