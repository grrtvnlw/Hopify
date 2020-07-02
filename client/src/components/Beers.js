import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addFavoriteBeer, deleteFavoriteBeer, addWishlistBeer, deleteWishlistBeer, addCity, addStyle, addBeers } from './redux/action';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Card } from 'react-bootstrap'
import styles from './Beers.module.css';

class Beers extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      // cityName: this.props.cityName,
      // styleName: this.props.styleName
      cityName: '',
      styleName: ''
    }
  }

  static getDerivedStateFromProps(props, state) {        
    if (props.cityName !== state.cityName || props.styleName !== state.styleName) { 
      let { cityName, styleName } = props
      if (styleName === 'All Beer' && cityName) {
        fetch(`/api/v1/beers?city=${cityName}`)
        .then(res => res.json())
        .then(data => {
          props.addBeers(data || [])
        })
        return {
          cityName,
          styleName       
        }
      } else if (styleName === 'All Beer') {
        fetch(`/api/v1/beers`)
        .then(res => res.json())
        .then(data => {
          props.addBeers(data || [])
        })
        return {
          cityName,
          styleName       
        } 
      // if (styleName === 'All Beer' && cityName) {
      //   fetch(`/api/v1/beers?city=${cityName}`)
      //   .then(res => res.json())
      //   .then(data => {
      //     props.addBeers(data || [])
      //   })
      //   return {
      //     cityName,
      //     styleName       
      //   }  
      } else {
        fetch(`/api/v1/beers?city=${cityName}&style=${styleName}`)
        .then(res => res.json())
          .then(data => {
            props.addBeers(data || [])
          })
        return {
          cityName,
          styleName       
        }        
      }
    } else {            
      return state;        
    }    
  }

  handleFormSubmit = (e) => {
      e.preventDefault();
      const { cityName, styleName } = this.props
      fetch(`/api/v1/beers?city=${cityName}&style=${styleName}`)
        .then(res => res.json())
        .then(data => {
            this.props.addBeers(data || [])
            this.setState({
              cityName: '',
              style: ''
          })
    })
  }

  componentDidMount() {
    this.props.addStyle('All Beer')
    fetch(`/api/v1/beers`)
      .then(res => res.json())
      .then(data => {
        this.props.addBeers(data || [])
      })
  }
  
  handleChange = (e) => {
    let city = e.target.value
    this.props.addCity(city)
  }

  saveData = (empty, e) => {
    let style = e.target.textContent
    this.props.addStyle(style)
  }

  clearField = (e) => {
    e.preventDefault()
    this.props.addCity('')
    let style = this.props.style
    fetch(`/api/v1/beers/${style}`)
      .then(res => res.json())
      .then(data => {
        this.props.addBeers(data || [])
        this.setState({
          cityName: ''
        })
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
                <NavDropdown.Divider />
                <NavDropdown.Item value='All Beer'>All Beer</NavDropdown.Item>  
              </NavDropdown>
              <Nav.Link href="/breweries">Breweries</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
              <Nav.Link href="/wishlist">Wishlist</Nav.Link>
            </Nav>
            <Form inline onSubmit={ this.handleFormSubmit }>
              <FormControl type="text" placeholder="Enter a city" className="mr-sm-2" value={ this.state.cityName } onChange={ this.handleChange } />
              <Button type="submit" variant="outline-primary" onClick={ this.clearField }>Clear</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className={ styles.beerDiv }>
          <h1>Select a style and a city to find beers</h1>
          <div className={ styles.specialDiv}>{ this.props.styleName && this.props.styleName + 's'}  { this.props.cityName && 'in ' + this.props.cityName }</div>
          { this.props.beers.map((beer, index) => {
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
                    <a href={ beer.link }><img src={ beer.image} className={ styles.beerImage }/></a>
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
    wishlistBeers: state.wishlistBeers,
    cityName: state.cityName,
    styleName: state.styleName,
    beers: state.beers
  }
}

const mapDispatchToProps = {
  addFavoriteBeer,
  deleteFavoriteBeer,
  addWishlistBeer,
  deleteWishlistBeer,
  addStyle,
  addCity,
  addBeers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beers)
