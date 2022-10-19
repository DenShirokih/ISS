import { useState } from 'react';
import { Info } from './Map.styled';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { getLocation } from 'api/apiService';
import { InfinitySpin } from 'react-loader-spinner';
import useInterval from 'hooks/useInterval';

const containerStyle = {
  width: '500px',
  height: '500px',
};

const options = {
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
};

export const Map = () => {
  const [location, setLocation] = useState('');
  useInterval(() => {
    getLocation().then(resp => setLocation(resp.iss_position));
  }, 5000);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_KEY,
  });

  const lat = +location.latitude;
  const lng = +location.longitude;
  const center = {
    lat: lat || 0,
    lng: lng || 0,
  };

  return isLoaded ? (
    <>
      <Info>
        <p>
          ISS is now located at: latitude:{lat} , longitude:{lng}
        </p>
      </Info>
      <GoogleMap
        options={options}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </>
  ) : (
    <InfinitySpin width="300" color="#ff0000" />
  );
};
