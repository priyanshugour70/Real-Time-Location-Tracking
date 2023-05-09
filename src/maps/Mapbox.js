import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuc2h1Z291cjcwIiwiYSI6ImNsYzV1ZjRqNjB1M3Izb21oemNmZXh2cmkifQ.-gm06JzvQcq8Ya3qpcQOYw';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(77.5234);
  const [lat, setLat] = useState(23.1836);
  const [zoom, setZoom] = useState(15.54);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className=''>
      <div className="bg-blue-800 bg-opacity-90 text-white font-mono z-10 fixed top-0 left-0 rounded-md">
        Longi: {lng} | Lati: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
