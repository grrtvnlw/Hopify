import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styles from './Breweries.module.css';

const mapStyles = {
  width: '880px',
  height: '400px',
};

class MapContainer extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   let newStores = this.props.map(brewery => {
  //     brewery.l
  //   })
  // }

  // displayMarkers = () => {
  //   console.log(this.props.breweries)
  //   this.props.breweries.map((store, index) => {
  //     console.log(store.latitude)
  //     console.log(store.longitude)
  //     return <Marker key={index} id={index} position={{
  //       lat:  store.latitude ? store.latitude : 33.76333225 ,
  //       lng:  store.longitude ? store.longitude : -84.3870607355802 
  //     }}
  //     onClick={() => console.log("You clicked me!")} />
  //   })
  // }
  
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 33.76333225, lng: -84.3870607355802 }}
        >
          {this.props.breweries.map((store, index) => {
              console.log(store.latitude)
              console.log(store.longitude)
              return <Marker key={index} id={index} position={{
                lat:  store.latitude ? store.latitude : 33.76333225 ,
                lng:  store.longitude ? store.longitude : -84.3870607355802 
              }}
              onClick={() => alert(store.name)} />
            })
          }
        </Map>
  );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSPu-lH4OIVqzXvbGJ2MgLo6xMnJYeU9M'
})(MapContainer);