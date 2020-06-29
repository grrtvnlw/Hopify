import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styles from './Breweries.module.css';

const mapStyles = {
  width: '880px',
  height: '400px',
};

class MapContainer extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
  );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSPu-lH4OIVqzXvbGJ2MgLo6xMnJYeU9M'
})(MapContainer);