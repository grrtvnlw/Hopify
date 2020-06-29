import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container, Card } from 'react-bootstrap'
import styles from './Breweries.module.css';

export default class Breweries extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      breweryName: '',
      breweries: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let city = this.state.breweryName
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          console.log(data)
          this.setState({
            breweries: data,
            breweryName: ''
          })
        }
      })
  }

  handleChange = (e) => {
    this.setState({
      breweryName: e.target.value
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
              <Nav.Link href="/beers">Beers</Nav.Link>
            </Nav>
            <Form inline onSubmit={ this.handleFormSubmit }>
              <FormControl type="text" placeholder="Enter a city" className="mr-sm-2" value={ this.state.movieName } onChange={ this.handleChange } />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className={ styles.breweryDiv }>
          <h1>Search for a city to find breweries</h1>
          { this.state.breweries.map((brewery, index) => {

            const { name, brewery_type, street, city, state, phone, website_url } = brewery;

            return (
              <Card className={ styles.breweryCard } key={ index }>
                <Card.Body>
                  <Card.Title className={ styles.title }>
                    { name && <h2>{ name }</h2> }
                  </Card.Title>
                  <Card.Text>
                    { brewery_type && <p>Type: { brewery_type }</p> }
                    { street && <p>Address: { street }, { city }, { state }</p> }
                    { phone && <p>Phone: { phone }</p> }
                    { website_url && <p>Website: <a href={ website_url }>{ website_url }</a></p> }
                    {/* <a href={ brewery.website }>Beer Menu</a>  */}
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </Container>
    )
  }
}
