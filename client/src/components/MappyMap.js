import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from './mapStyles'
import pic from './beer.png'

function Map(props) {
  const map = useRef(null);
  const [selectedBrewery, setSelectedBrewery] = useState(null);

  useEffect(() => {
    const bounds = new window.google.maps.LatLngBounds();
    props.breweries.forEach(brewery => {
      const { latitude, longitude } = brewery;
      if (latitude && longitude) {
        const latLng = new window.google.maps.LatLng(latitude, longitude);
        bounds.extend(latLng);
      }
    });
    map.current && map.current.fitBounds(bounds);
  })

  return (
    <GoogleMap
      ref={map}
      defaultZoom={11}
      defaultCenter={{ lat: 33.76333225, lng: -84.3870607355802 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {props.breweries.map((brewery, index) => {
        return (
          <Marker
            key={index}
            position={{
              lat: Number.parseFloat(brewery.latitude),
              lng: Number.parseFloat(brewery.longitude)
            }}
            onClick={() => {
              setSelectedBrewery(brewery)
            }}
            icon={{
              url: pic,
              // scaledSize: new window.google.maps.Size(25, 25)
              scaledSize: { width: 25, height: 25 }
            }}
          />
        )
      })}

      {selectedBrewery && (
        <InfoWindow
          position={{
            lat: Number.parseFloat(selectedBrewery.latitude),
            lng: Number.parseFloat(selectedBrewery.longitude)
          }}
          onCloseClick={() => {
            setSelectedBrewery(null);
          }}
        >
          <div>
            {selectedBrewery.website_url ?
              <h2><a href={selectedBrewery.website_url} target="_blank" rel="noopener noreferrer">{selectedBrewery.name}</a></h2>
              :
              <h2>{selectedBrewery.name}</h2>
            }
            <div>
              {selectedBrewery.street && <p><b>Address:</b> {selectedBrewery.street}</p>}
              {selectedBrewery.phone && <p><b>Phone Number:</b> {selectedBrewery.phone}</p>}
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MappyMap(props) {
  return (
    <div style={{ width: '90%', height: '500px', margin: '0 auto' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        {...props}
      >
      </WrappedMap>
    </div>
  )
}
