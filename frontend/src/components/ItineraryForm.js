import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function ItineraryForm() {
  const [destination, setDestination] = useState('');
  const [location, setLocation] = useState(null);  // To store the geocoded location

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the browser's Fetch API to make a call to the Google Geocoding API
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        destination
      )}&key=AIzaSyDU-xTYolLnPcczC02mfaU2oM6gz42Z31Y`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          const { lat, lng } = data.results[0].geometry.location;
          setLocation({ lat, lng });
          console.log("Geocoded Location:", { lat, lng });
        } else {
          console.error('Geocode was not successful for the following reason:', data.status);
        }
      })
      .catch((error) => console.error('Error during geocoding:', error));
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const defaultCenter = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button type="submit">Geocode Destination</button>
      </form>

      {location && (
        <LoadScript googleMapsApiKey="AIzaSyDU-xTYolLnPcczC02mfaU2oM6gz42Z31Y">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={10}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
}

export default ItineraryForm;