let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");
let proper_add;
button.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        lat = lat.toFixed(8);
        long = long.toFixed(8);

        // alert(lat);
        // alert(long);
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=48470a7625c44368a8544c93e27376ea`)
            .then(response => response.json()).then(response => {
                let allDetails = response.results[0].components;
                console.table(allDetails);
                let { county, postcode, city, state, country, continent } = allDetails;

                proper_add = `${county} ${postcode},${city},${state}, ${country},${continent}`;
                document.getElementById('loc').innerText = proper_add;

            }).catch(() => {
                document.getElementById('loc').innerText = "Something went wrong";
            });

        mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuc2h1Z291cjcwIiwiYSI6ImNsYzV1ZjRqNjB1M3Izb21oemNmZXh2cmkifQ.-gm06JzvQcq8Ya3qpcQOYw';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-v9',
            projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
            zoom: 0.8,
            center: [long, lat]
        });


        // create the popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            'Longitude : ' + lat + ' & Latitude : ' + long
        );


        // Create a default Marker and add it to the map.
        const marker1 = new mapboxgl.Marker({
            color: 'red'
        })
            .setLngLat([long, lat])
            .setPopup(popup)
            .addTo(map);



        map.on('style.load', () => {
            map.setFog({}); // Set the default atmosphere style
        });

        // The following values can be changed to control rotation speed:

        // At low zooms, complete a revolution every two minutes.
        const secondsPerRevolution = 120;
        // Above zoom level 5, do not rotate.
        const maxSpinZoom = 5;
        // Rotate at intermediate speeds between zoom levels 3 and 5.
        const slowSpinZoom = 3;

        let userInteracting = false;
        let spinEnabled = true;

        function spinGlobe() {
            const zoom = map.getZoom();
            if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
                let distancePerSecond = 360 / secondsPerRevolution;
                if (zoom > slowSpinZoom) {
                    // Slow spinning at higher zooms
                    const zoomDif =
                        (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                    distancePerSecond *= zoomDif;
                }
                const center = map.getCenter();
                center.lng -= distancePerSecond;
                // Smoothly animate the map over one second.
                // When this animation is complete, it calls a 'moveend' event.
                map.easeTo({ center, duration: 1000, easing: (n) => n });
            }
        }

        // Pause spinning on interaction
        map.on('mousedown', () => {
            userInteracting = true;
        });

        // Restart spinning the globe when interaction is complete
        map.on('mouseup', () => {
            userInteracting = false;
            spinGlobe();
        });

        // These events account for cases where the mouse has moved
        // off the map, so 'mouseup' will not be fired.
        map.on('dragend', () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on('pitchend', () => {
            userInteracting = false;
            spinGlobe();
        });
        map.on('rotateend', () => {
            userInteracting = false;
            spinGlobe();
        });

        // When animation is complete, start spinning if there is no ongoing interaction
        map.on('moveend', () => {
            spinGlobe();
        });

        document.getElementById('btn-spin').addEventListener('click', (e) => {
            spinEnabled = !spinEnabled;
            if (spinEnabled) {
                spinGlobe();
                e.target.innerHTML = 'Pause rotation';
            } else {
                map.stop(); // Immediately end ongoing animation
                e.target.innerHTML = 'Start rotation';
            }
        });

        spinGlobe();


    });
});