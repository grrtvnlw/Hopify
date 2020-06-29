import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Card } from 'react-bootstrap'

export default class Beers extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      beers: [],
    }
  }
  
componentDidMount() {
  fetch('/api/v1/beers')
  .then(res => res.json())
  .then(data => {
    this.setState({
      beers: data
    })
  })
}

  render() {
    return (
      <Container>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Hopify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/breweries">Breweries</Nav.Link>
              <NavDropdown title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Atlanta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Denver</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bay Area</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Types" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">IPA</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Seltzer</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Lager/Pilsner</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wheat</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Stout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Porter</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div>
          { this.state.beers.map(beer => {
            return (
              <Card>
                <h1>{ beer.name }</h1>
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
