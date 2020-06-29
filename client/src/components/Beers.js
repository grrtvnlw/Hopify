import React, { Component } from 'react'

export default class Beers extends Component {
  constructor() {
    super();
  
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
            </div>
          )
        })}
      </div>
    )
  }
}
