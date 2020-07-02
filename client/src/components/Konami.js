import React from 'react';
import Konami from 'react-konami-code';
import MyModal from './MyModal';

export default class App extends React.Component {
  easterEgg = () => {
    fetch('/random')
    .then(res => res.json())
      .then(data => {
        console.log(data.data)
        })
    alert('Cheers! 🍻');
  }

  render = () => (
    <Konami action={this.easterEgg}>
      {/* <MyModal /> */}
      {"Hey, I'm an Easter Egg! Look at me!"}
    </Konami>
  )
}