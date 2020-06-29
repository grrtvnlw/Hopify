import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      <div>
        { this.state.breweries.map(brewery => {
          return (
            <div>
              <h1>{ brewery.name }</h1> <img src={ brewery.images } />
              <p>{ brewery.description }</p>
              <a href={ brewery.website }>{ brewery.website }</a> 
              <ul>
                <li><b>Address: </b>{ brewery.streetAddress }, { brewery.locality }, { brewery.region }</li>
                <li><b>Phone: </b>{ brewery.phone }</li>
              </ul>
              <Link to="/">Home</Link>
              <Link to="/beers">Beers</Link>
            </div>
          )
        })}
      </div>
    )
  }
}
