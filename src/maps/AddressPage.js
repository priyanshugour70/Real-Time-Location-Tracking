import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CurrentAddress = () => {
    const [address, setAddress] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Get the current position using the browser's geolocation
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
  
          // Retrieve latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
  
          // Make a request to the OpenCageData API
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?key=48470a7625c44368a8544c93e27376ea&q=${latitude},${longitude}`
          );
  
          // Extract the formatted address from the API response
          const formattedAddress = response.data.results[0].formatted;
  
          // Update the address state
          setAddress(formattedAddress);
        } catch (error) {
          console.log('Error occurred while retrieving address:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {address ? (
          <div>{address}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  };
  
  export default CurrentAddress;
  
  