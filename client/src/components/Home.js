import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Hopify</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/beers">Beers</Nav.Link>
              <Nav.Link href="/breweries">Breweries</Nav.Link>
              {/* <NavDropdown title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Atlanta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Denver</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bay Area</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}
