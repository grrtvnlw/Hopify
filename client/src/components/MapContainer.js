import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Geocode from 'react-geocode';
import styles from './MapContainer.module.css';

const mapStyles = {
  // width: '880px',
  // height: '400px',
  display: 'flex',
  border: '1px solid red',
  // margin: '10px',
  // width: '80%',
  // height: '45%',
};

class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stores: [],
      infoWindow: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
  }
  }

  onMarkerClick = (props, marker) => {
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
    });
}

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) 
  {
    return { ...prevState, stores: nextProps.breweries };
  }
  
  render() {
    return (
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={10}
          // className={ styles.map }
          style={mapStyles}
          initialCenter={{ lat: 33.76333225, lng: -84.3870607355802 }}
        >
          {this.state.stores.map((store, index) => {
              return (
                <Marker key={index} id={index} position={{
                  lat:  store.latitude ? store.latitude : 33.76333225 ,
                  lng:  store.longitude ? store.longitude : -84.3870607355802 
                }} name={store.name}
                onClick={this.onMarkerClick} />
              )
            })}
          {this.state.stores.map((store, index) => {
            return (
              <InfoWindow marker={this.state.activeMarker}
                visible={this.state.activeMarker && this.state.activeMarker.id  === index} id={index} name={store.name} street={store.street}>
                <div>
                  <h4>{ store.name }</h4>
                  <h6>{ store.street }</h6>
                  <p>{ store.phone }</p>
                  <p>{ store.website }</p>
                </div>
              </InfoWindow >
            )
          })}
        </Map>
  );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSPu-lH4OIVqzXvbGJ2MgLo6xMnJYeU9M'
})(MapContainer);