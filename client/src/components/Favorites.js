import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Navbar, Nav, Button, Container, Card } from 'react-bootstrap'
import { deleteFavoriteBeer, deleteFavoriteBrewery, addWishlistBeer, addWishlistBrewery, deleteWishlistBeer, deleteWishlistBrewery } from './redux/action';
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
                      <h3>{ beer.name }</h3> 
                      <p className={ styles.description }>{ beer.description }</p>
                      <ul>
                        <li><b>ABV: </b>{ beer.abv }</li>
                        <li><b>IBU: </b>{ beer.ibu }</li>
                        <li><b>Brewer: </b><a href={ beer.breweryLink } target="_blank">{ beer.brewery }</a></li>
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
                      <a href={ beer.link } target="_blank"><img src={ beer.image} className={ styles.beerImage }/></a>
                    </div>
                  </div>
                </Card>
              )
            })}
            <h2>Breweries</h2>
            { this.props.favoriteBreweries.map((brewery, index) => {

            const { name, brewery_type, street, city, state, phone, website_url } = brewery;

            return (
              <Card className={ styles.breweryCard } key={ index }>
                <div className={ styles.wrapper }>
                  <div>
                    <Card.Title className={ styles.title }>
                      { name && <h3>{ name }</h3> }
                    </Card.Title>
                    <Card.Text>
                      { brewery_type && <p>Type: { brewery_type }</p> }
                      { street && <p>Address: { street }, { city }, { state }</p> }
                      { phone && <p>Phone: { phone }</p> }
                      { website_url && <p>Website: <a href={ website_url } target="_blank">{ website_url }</a></p> }
                    </Card.Text>
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
    favoriteBreweries: state.favoriteBreweries,
    wishlistBeers: state.wishlistBeers,
    wishlistBreweries: state.wishlistBreweries
  }
}

const mapDispatchToProps = {
  addWishlistBeer,
  deleteWishlistBeer,
  addWishlistBrewery,
  deleteWishlistBrewery,
  deleteFavoriteBeer,
  deleteFavoriteBrewery
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);
