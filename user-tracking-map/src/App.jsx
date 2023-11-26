// App.js

import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '100vh',
  width: '100%'
};

const defaultCenter = {
  lat: 9.0599, 
  lng: 7.4894 
};

// Trip details including static information and route data
const tripDetails = {
  arrivalTime: '05:40pm',
  currentLocation: 'Adeniji Adele Rd, Lagos, Nigeria',
  driver: 'Ejike Malaki',
  tripID: 'SPH267',
  startLocation: { lat: 7.4433, lng: 3.9003 },
  endLocation: { lat: 7.2297, lng: 3.4392 },
  travelMode: 'DRIVING'
};

const TripInfo = ({ route }) => {
  // Use static trip data
  const { arrivalTime, currentLocation, driver, tripID } = tripDetails;

  return (
    <div className="trip-info">
      <h2>Trip Info</h2>
      <p><strong>Driver:</strong> {driver}</p>
      <p><strong>Trip ID:</strong> {tripID}</p>
      <p><strong>Estimated Arrival Time:</strong> {arrivalTime}</p>
      <p><strong>Currently at:</strong> {currentLocation}</p>
      {/* Display route details if available */}
      {route && (
        <>
          <p><strong>Distance:</strong> {route.distance.text}</p>
          <p><strong>Duration:</strong> {route.duration.text}</p>
        </>
      )}
    </div>
  );
};

const App = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCmyCKmaT7RD1OHr3FOWA-2O8-lYkYeCUU">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={15}
      >
        <DirectionsService
          options={{
            destination: tripDetails.endLocation,
            origin: tripDetails.startLocation,
            travelMode: tripDetails.travelMode,
          }}
          callback={res => {
            if (res !== null) {
              setDirectionsResponse(res);
            }
          }}
        />

        {directionsResponse && (
          <DirectionsRenderer
            options={{
              directions: directionsResponse
            }}
          />
        )}
        <TripInfo route={directionsResponse ? directionsResponse.routes[0].legs[0] : null} />
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
