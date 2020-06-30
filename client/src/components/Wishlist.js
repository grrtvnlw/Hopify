import React from 'react'
import { Navbar, Nav, Button, Container, Card } from 'react-bootstrap'
import styles from './Favlist.module.css';

export default function Wishlist() {
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
          <h1>Wishlist</h1>
        </div>
      </Container>
  )
}
