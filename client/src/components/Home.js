import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import styles from './Home.module.css';
import pic from '../Hops_IPA_Pour-BA-1200.jpg';
{/* <link href="https://fonts.googleapis.com/css2?family=Lemon&display=swap" rel="stylesheet"></link> */}

export default class Home extends Component {
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={ styles.home }>
          <header>
            <h1>H🌳pify</h1>
            <h3>Find beers and breweries in your city</h3>
          </header>
          <img src={ pic } alt=""/>
        </div>
      </Container>
    )
  }
}
