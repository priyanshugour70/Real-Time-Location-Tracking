import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CurrentAddress = () => {
    const [address, setAddress] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
  
          const { latitude, longitude } = position.coords;
  
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?key=48470a7625c44368a8544c93e27376ea&q=${latitude},${longitude}`
          );
  
          const formattedAddress = response.data.results[0].formatted;
  
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
  
  