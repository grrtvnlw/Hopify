import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  return (
    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{ lat: 33.76333225, lng: -84.3870607355802 }}
      />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MappyMap() {
  return (
    <div style={{ width: '80%', height: '500px' }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style ={{ height: '100%' }} />}
          mapElement={<div style ={{ height: '100%'}} />}
          />
    </div>
  )
}
