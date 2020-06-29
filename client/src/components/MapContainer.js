import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Geocode from 'react-geocode';
import styles from './Breweries.module.css';

const mapStyles = {
  width: '880px',
  height: '400px',
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

  onMarkerClick = (props, marker, store, e) => {

    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
    });
    return (
        <InfoWindow marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow} name={props.name} >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow >
    )
}

  onMapClicked = (props) => {
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
                visible={this.state.showingInfoWindow} name={store.name} id={index} address={store.formatted_address}>
                <div>
                  <h4>{ this.state.selectedPlace.name }</h4>
                  <h6>{ this.state.selectedPlace.street }</h6>
                  <p>{ this.state.selectedPlace.phone }</p>
                  <p>{ this.state.selectedPlace.website }</p>
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