import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Card } from 'react-bootstrap'

export default class Breweries extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      breweries: [],
    }
  }

  componentDidMount() {
    fetch('/api/v1/breweries')
    .then(res => res.json())
    .then(data => {
      this.setState({
        breweries: data
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
              <Nav.Link href="/breweries">Beers</Nav.Link>
              <NavDropdown title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Atlanta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Denver</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bay Area</NavDropdown.Item>
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
          { this.state.breweries.map(brewery => {
            return (
              <Card>
                <h1>{ brewery.name }</h1> <img src={ brewery.images } />
                <p>{ brewery.description }</p>
                <a href={ brewery.website }>{ brewery.website }</a> 
                <ul>
                  <li><b>Address: </b>{ brewery.streetAddress }, { brewery.locality }, { brewery.region }</li>
                  <li><b>Phone: </b>{ brewery.phone }</li>
                </ul>
              </Card>
            )
          })}
        </div>
      </Container>
    )
  }
}
