import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Card } from 'react-bootstrap'
import styles from './Beers.module.css';

export default class Beers extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      beers: [],
    }
  }
  
// componentDidMount() {
//   fetch('/api/v1/beers')
//   .then(res => res.json())
//   .then(data => {
//     this.setState({
//       beers: data
//     })
//   })
// }

  fetchData = (nothing, e) => {
    // console.log('hello!')
    console.log(e.target.textContent)
    let style = e.target.textContent
    fetch(`/api/v1/beers/${style}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({
          beers: data
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
              <Nav.Link href="/breweries">Breweries</Nav.Link>
              <NavDropdown title="Styles" id="basic-nav-dropdown" onSelect={this.fetchData}>
                <NavDropdown.Item value='IPA'>IPA</NavDropdown.Item>
                <NavDropdown.Item value='Seltzer'>Seltzer</NavDropdown.Item>
                <NavDropdown.Item value='Lager'>Lager</NavDropdown.Item>
                <NavDropdown.Item value='Pilsner'>Pilsner</NavDropdown.Item>
                <NavDropdown.Item value='Wheat'>Wheat</NavDropdown.Item>
                <NavDropdown.Item value='Stout'>Stout</NavDropdown.Item>
                <NavDropdown.Item value='Porter'>Porter</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Enter a city" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className={ styles.beerDiv }>
          <h1>Search for a city and a style to find beers</h1>
          { this.state.beers.map(beer => {
            return (
              <Card className={ styles.beerCard }>
                <h2>{ beer.name }</h2>
                <p>{ beer.description }</p>
                <ul>
                  <li><b>ABV: </b>{ beer.abv }</li>
                  <li><b>IBU: </b>{ beer.ibu }</li>
                </ul>
                <a href={ beer.link }>{ beer.link }</a>
              </Card>
            )
          })}
        </div>
      </Container>
    )
  }
}
