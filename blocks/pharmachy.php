<?php

require '../functions.php';

if (!is_logged_in()) {
	redirect('../login.php');
}

$id = $_GET['id'] ?? $_SESSION['PROFILE']['id'];

$row = db_query("select * from users where id = :id limit 1", ['id' => $id]);

if ($row) {
	$row = $row[0];
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>RTLT | New Pharmacy</title>
	<link rel="icon" type="x-icon" href="../img/img-web-icon.png" alt="" width="30" height="24">
	<!-- CSS For Bootstrap -->
	<link rel="stylesheet" href="../style.css">
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css" rel="stylesheet">
	<script src="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js"></script>

	<style>
		body {
			background-image: url('../img/main-backgound-img.jpg');
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: 100% 100%;
		}

		/* #map{
			margin-top: 900px;
		} */
	</style>
</head>


<body>
	<!-- Navigation bar.. -->
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand fw-bolder fs-4" href="../index.php"><img src="../img/img-web-icon.png" width="35" alt="icon"> RTLT - SAGE UNIVERSITY, BHOPAL</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
					<form class="d-flex">
						<img src="../img/img-user-icon.png" class="m-1" width="30" alt="Img">
						<a class="nav-link active" aria-current="page" href="../user-profile.php">
							<h5><?php echo $row["email"]; ?></h5>
						</a>
						<a href="../logout.php"><button class=" mt-1 btn btn-sm btn-outline-secondary" type="button">LogOut</button></a>
					</form>
				</div>
			</div>
		</nav>
	</header>

	<main>

    <div class="container ">
		<h1 class="fw-bolder" style="text-align: center; margin:5vh;" > SAGE New Pharmacy</h1>
	</div>

		<!-- staring main gate.. -->
		<div class="px-4 pt-5 my-5 text-center border-bottom">
			<h3>
				<span id="loc"></span>
			</h3>



			<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
				<button href="#" class="btn btn-outline-dark btn-lg px-4" id="get-location">Get Location</button>
				<button class="btn btn-outline-dark btn-lg px-3"> <a href="../index.php" > Return Home</a></button>
			</div>
			<button class="btn btn-secondary btn-sm" id="btn-spin">Pause rotation</button>
			<div id="map" style="height:500px;" style="width: 600px;" class="container">
			</div>



		</div>
		<!-- close main gate.. -->
	</main>

	<footer class="text-center text-lg-start text-white" style="background-color: #1c2331">

		<!-- Copyright -->
		<div class="text-left p-3" style="background-color: rgba(73, 66, 66, 0.504)">
			&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;© 2022-23 Copyright:
			<a class="text-white" href="../index.php"><img src="../img/img-web-icon.png" alt="" height="20" class="d-inline-block align-text-top active"> Real Time Location Tracking</a>
			&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
			<a class=" align-content-end p-3" target="_blank" href="https://github.com/priyanshugour70"><img src="../img/img-github-icon.png" width="30" alt="github"></a>
			<a class=" align-content-end p-3" target="_blank" href="https://www.linkedin.com/in/priyanshu-gour-32825024a/"><img src="../img/img-linkedin-icon.png" width="38" alt="linkedin"></a>
			<a class=" align-content-end p-3" target="_blank" href="https://www.instagram.com/priyanshugour70/"><img src="../img/img-instagram-icon.png" width="40" alt="instagram"></a>
			<a class=" align-content-end p-3" target="_blank" href="https://www.facebook.com/gourpriyanshu"><img src="../img/img-facebook-icon.png" width="40" alt="facebook"></a>
			<a class=" align-content-end p-3" target="_blank" href="https://twitter.com/PriyanshuGour07"><img src="../img/img-twitter-icon.png" width="40" alt="twitter"></a>
		</div>
	</footer>

	<!-- JavaScript For Bootstrap -->
	<script src="../js/bootstrap.min.js"></script>
	<!-- <script src="../javascript.js"></script> -->
	<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
	<script>
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
						let {
							county,
							postcode,
							city,
							state,
							country,
							continent
						} = allDetails;

						proper_add = `${county} ${postcode},${city},${state}, ${country},${continent}`;
						document.getElementById('loc').innerText = proper_add;

					}).catch(() => {
						document.getElementById('loc').innerText = "Something went wrong";
					});

				mapboxgl.accessToken = 'pk.eyJ1IjoicHJpeWFuc2h1Z291cjcwIiwiYSI6ImNsYzV1ZjRqNjB1M3Izb21oemNmZXh2cmkifQ.-gm06JzvQcq8Ya3qpcQOYw';
				const map = new mapboxgl.Map({
					container: 'map',
					style: 'mapbox://styles/mapbox/satellite-v9',
					projection: 'globe', 
					zoom: 16,
					center: [long, lat]
				});


				const boroughs = [{
						name: 'Current Location..',
						color: '#ff0000',
						lngLat: [long, lat]

					},
					{
						name: 'New Pharmacy Block..',
						color: '#00ffff',
						lngLat: [77.5245309, 23.18362130]
					}

				]
				boroughs.forEach(({name,color,lngLat}) => {
					const popup = new mapboxgl.Popup({offset: 25}).setText(name); 

					const marker1 = new mapboxgl.Marker({
						color,	
						scale: 1
						})
						.setLngLat(lngLat)
						.setPopup(popup)
						.addTo(map);
				})


				map.on('style.load', () => {
					map.setFog({});
				});




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
						map.easeTo({
							center,
							duration: 1000,
							easing: (n) => n
						});
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
	</script>
</body>

</html>