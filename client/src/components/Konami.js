import React from 'react';
import Konami from 'react-konami-code';

export default class App extends React.Component {
  easterEgg = () => {
    fetch(`https://sandbox-api.brewerydb.com/v2/brewery/random/?key=eafdb3badd96f50902820174d4b47ed4&params=established`)
    .then(res => res.json())
      .then(data => {
        console.log(data)
        })
    alert('Cheers! 🍻');
  }

  render = () => (
    <Konami action={this.easterEgg}>
      {"Hey, I'm an Easter Egg! Look at me!"}
    </Konami>
  )
}