import React, { useEffect, useState } from 'react';


const Geolocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the current position using the browser's geolocation
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        // Retrieve latitude and longitude from the position object
        const { latitude, longitude } = position.coords;

        // Update the latitude and longitude states
        setLatitude(latitude);
        setLongitude(longitude);
      } catch (error) {
        console.log('Error occurred while retrieving geolocation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Geolocation</h1>
      {latitude && longitude ? (
        <div>
          Latitude: {latitude}<br />
          Longitude: {longitude}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Geolocation;
