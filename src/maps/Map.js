import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 23.182235,
        longitude: 77.526332,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle="mapbox://styles/priyanshugour70/clhf07qpa01an01pg8r5kdgzz"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ></ReactMapGL>
    );
};

export default Map;
