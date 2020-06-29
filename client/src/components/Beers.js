import React, { Component } from 'react'

export default class Beers extends Component {
  constructor() {
    super();
  
    this.state = {
      beers: [],
    }
  }
  
componentDidMount() {
  fetch('http://localhost:3001/api/v1/beers')
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
              <pre>{ JSON.stringify(beer, null, '\n') }</pre>
            </div>
          )
        })}
      </div>
    )
  }
}
