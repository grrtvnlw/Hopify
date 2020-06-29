import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      <div>
        { this.state.beers.map(beer => {
          return (
            <div>
              <h1>{ beer.name }</h1>
              <p>{ beer.description }</p>
              <ul>
                <li><b>ABV: </b>{ beer.abv }</li>
                <li><b>IBU: </b>{ beer.ibu }</li>
              </ul>
              <a href={ beer.link }>{ beer.link }</a>
              <br />
              <Link to="/">Home</Link>
              <Link to="/breweries">Breweries</Link>
            </div>
          )
        })}
      </div>
    )
  }
}
