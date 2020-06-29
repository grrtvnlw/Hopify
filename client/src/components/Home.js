import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers">Beers</Link>
        <Link to="/breweries">Breweries</Link>
      </div>
    )
  }
}
