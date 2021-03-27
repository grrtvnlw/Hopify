// import React from 'react';
// import Konami from 'react-konami-code';
// import MyModal from './MyModal';

// export default class Konami extends React.Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       random: {}
//     }
//   }
  
//   easterEgg = () => {
//     fetch('/random')
//     .then(res => res.json())
//       .then(response => {
//         console.log(response.data)
//         this.setState({
//           random: response.data
//         })
//         })
//     alert('Cheers! 🍻');
//   }

//   render = () => (
//     <Konami action={this.easterEgg}>
//       <MyModal randomBeer={ this.state.random }/>
//       {"Hey, I'm an Easter Egg! Look at me!"}
//     </Konami>
//   )
// }