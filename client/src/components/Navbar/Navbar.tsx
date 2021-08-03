import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.css";

const Navigation: React.FunctionComponent = (): JSX.Element => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.colorNav}>
      <Navbar.Brand href="/" className={styles.navBrand}>
        Hopify
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/beers">Beers</Nav.Link>
          <Nav.Link href="/breweries">Breweries</Nav.Link>
          <Nav.Link href="/favorites">Favorites</Nav.Link>
          <Nav.Link href="/wishlist">Wishlist</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
