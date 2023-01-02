<?php

require 'functions.php';

if (!is_logged_in()) {
	redirect('login.php');
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
	<title>RTLT | Home</title>
	<link rel="icon" type="x-icon" href="img/img-web-icon.png" alt="" width="30" height="24">
	<!-- CSS For Bootstrap -->
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css" rel="stylesheet">
	<script src="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js"></script>

	<style>
		body {
			background-image: url('img/main-backgound-img.jpg');
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-size: 100% 100%;
		}

		*{
			margin: 0px;
			padding: 0px;
		}
		/* #map{
			margin-top: 800px;
		} */

	</style>
</head>


<body>
	<!-- Navigation bar.. -->
	<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand fw-bolder fs-4" href="index.php"><img src="img/img-web-icon.png" width="35" alt="icon"> RTLT - SAGE UNIVERSITY, BHOPAL</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
					<form class="d-flex">
						<img src="img/img-user-icon.png" class="m-1" width="30" alt="Img">
						<a class="nav-link active" aria-current="page" href="user-profile.php">
							<h5><?php echo $row["email"]; ?></h5>
						</a>
						<a href="logout.php"><button class=" mt-1 btn btn-sm btn-outline-secondary" type="button">LogOut</button></a>
					</form>
				</div>
			</div>
		</nav>
	</header>

	<main>
		<div class="container my-2">
			<div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="img/slide-img-1.jpg" class="d-block w-100" width="700" alt="...">
						<div class="carousel-caption d-none d-md-block">
							<h2 class="fw-bold font-Roboto-Slab">Welcome to Sage University</h2>
							<h5>Bhopal</h5>
							<p>The University of Thoughts & Innovation.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="img/slide-img-2.jpg" class="d-block w-100" width="700" alt="...">
						<div class="carousel-caption d-none d-md-block ">
							<h2 class="fw-bold font-Roboto-Slab ">Welcome to Sage University</h2>
							<h5>Bhopal</h5>
							<p>The University of Thoughts & Innovation.</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src="img/slide-img-3.jpg" class="d-block w-100" width="700" alt="...">
						<div class="carousel-caption d-none d-md-block">
							<h2 class="fw-bold font-Roboto-Slab ">Welcome to Sage University</h2>
							<h5>Bhopal</h5>
							<p>The University of Thoughts & Innovation.</p>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>

		<!-- staring main gate.. -->
		<div class="px-4 pt-5 my-5 text-center border-bottom">
			<h1 class="display-4 fw-bold">Sage University, Bhopal</h1>
			<div class="col-lg-6 mx-auto my-3">
				<p class="lead mb-4 fw-bold">Sanjeev Agrawal Global Educational (SAGE) University, We make lives better by
					producing leaders of society and equipping our people with quality leadership qualities, so they can
					serve our communities at every level. Sanjeev Agrawal Global Educational (SAGE) University Bhopal is
					a well established University and functions under the patronage of Shri Agrawal Educational Public
					Trust.</p>
			</div>

			
			
			
			
		
			<h3>
				<span id="loc"></span>
			</h3>

			<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
				<button href="#" class="btn btn-outline-dark btn-lg px-4" id="get-location">Get Current Location</button>
			</div>
			<button style="z-index: 1;" class="btn btn-secondary btn-sm" id="btn-spin">Pause rotation</button>
			<!-- <div style="height:70vh;" style="width: 100vw;"></div> -->
			<div id="map" style="height:70vh;" style="width: 100vw;"></div>



			



			<div class="overflow-hidden" style="max-height: 40vh;">
				<div class="container px-5 my-3">
					<img src="img/Sage-Entery-Gate.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="725" loading="lazy">
				</div>
			</div>
		</div>
		<!-- close main gate.. -->

		<!-- for curent location .... -->
		<div class="card-group container my-5">
			<div class="mx-5 card" style="width: 18rem;">
				<img src="img/Sage-Admin-img.jpg" class="card-img-top" alt="Sage Admin img">
				<div class="card-body">
					<h5 class="card-title">SAGE Administrative Block</h5>
					<p class="card-text">The Administrative Block of the school is a compact block that includes the
						Reception, Director's Office, Vice-Chairman's Office, Principal's Office, Superintendent's
						Office, Accounts Office and Administrative Officer's Office. Academic Block.</p>
					<a href="blocks/admin.php" target="_blank" class="btn btn-outline-dark">Get Location</a>
				</div>
			</div>


			<div class="mx-5 card" style="width: 18rem;">
				<img src="img/sage-fblock-img.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">SAGE University Block-F</h5>
					<p class="card-text">Technical skills are the abilities, knowledge, or expertise required to perform
						specific, job-related tasks. Technical skills are related to jobs in science, engineering, tech,
						manufacturing, or finance. They are learned through on-the-job experience or structured
						learning.</p>
					<a href="blocks/block-f.php" class="btn btn-outline-dark">Get Location</a>
				</div>
			</div>


			<div class="mx-5 card" style="width: 18rem;">
				<img src="img/sage-hall-img.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">Royal SAGE Hall</h5>
					<p class="card-text">An auditorium is a room built to enable an audience to hear and watch
						performances. For movie theatres, the number of auditoria (or auditoriums) is expressed as the
						number of screens. Auditoria can be found in entertainment venues, community halls.</p>
					<a href="blocks/royal-sage-hall.php" class="btn btn-outline-dark">Get Location</a>
				</div>
			</div>
		</div>


		<div class="container my-3">
			<div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
				<div class="col-lg-6 p-3 p-lg-6 pt-lg-3">
					<div class="lc-block mb-4">
						<div editable="rich">
							<h1 class="fw-bold display-3">SAGE Management & Law &nbsp;<p></p>
								<p></p>
							</h1>
						</div>
					</div>

					<div class="lc-block mb-3">
						<div editable="rich">
							<p class="lead">In Management and Legal Studies, you'll look at the intersection of business
								and law, preparing you for a broad array of business careers where knowledge of how
								legal issues impact decisions is critical to success.
							</p>
						</div>
					</div>

					<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
						<a class="btn btn-outline-dark px-4" href="blocks/management-law.php" role="button">Get Location</a>
					</div>
				</div>
				<div class="col-lg-6  p-4 overflow-hidden shadow-lg">
					<div class="lc-block"><img class="rounded-start" src="img/sage-llb-img.jpg" alt="This is an image of Management and law" width="500"></div>
				</div>
			</div>
		</div>



		<div class="card-group container my-5">
			<div class="mx-5 card" style="width: 18rem;">
				<img src="img/sage-mandir-img.jpg" class="card-img-top" alt="Sage Admin img">
				<div class="card-body">
					<h5 class="card-title">Radha Krishna Temple</h5>
					<p class="card-text">A temple is a religious building that's meant for worshipping or praying. Hindu
						temples are typically devoted to one specific god (Radha Krishna).</p>
					<a href="blocks/radha-krishna-temple.php" class="btn btn-outline-dark">Get Location</a>
				</div>
			</div>


			<div class="mx-5 card" style="width: 18rem;">
				<img src="img/sage-parking-img.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">SAGE University Parking</h5>
					<p class="card-text">While parking, you have to ensure that where you stop your vehicle doesn't
						cause hindrance or blockage to others (vehicles and people). At the same time, your motor
						wheeler should be parked at a place where it is allowed.</p>
					<a href="blocks/parking.php" class="btn btn-outline-dark">Get Location</a>
				</div>
			</div>


			<div class="mx-5 card" style="width: 18rem;">
				<img src="img/sage-fblock-img.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">Sage University Block - A</h5>
					<p class="card-text">Pharmacy technicians can work in places like community (retail) pharmacies;
						hospital pharmacies; pharmaceutical production or sales in the pharmaceutical industry; prisons;
						and primary care, education, military, or veterinary practices.</p>
					<a href="blocks/block-a.php" class="btn btn-outline-dark">Get Location</a>
				</div>
			</div>

		</div>





		<div class="container col-xxl-8 px-4 py-2">
			<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div class="col-10 col-sm-8 col-lg-6">
					<img src="img/sage-library-img.jpg" class="d-block mx-lg-auto img-fluid" alt="This is an image..." loading="lazy">
				</div>
				<div class="col-lg-6">
					<div class="lc-block mb-3">
						<div editable="rich">
							<h2 class="fw-bold display-5">Library....</h2>
						</div>
					</div>

					<div class="lc-block mb-3">
						<div editable="rich">
							<p class="lead">“Library -- from the Latin liber, meaning "book." In Greek and the Romance
								languages, the corresponding term is bibliotheca. A collection or group of collections
								of books and/or other print or nonprint materials organized and maintained for use
								(reading, consultation, study, research, etc.).
							</p>
						</div>
					</div>

					<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
						<a class="btn btn-outline-dark px-4" href="blocks/library.php" role="button">Get Location</a>
					</div>

				</div>
			</div>
		</div>


		<div class="card-group container my-5">
			<div class="col mx-5">
				<div class="card col-lg-9 mx-5">
					<img src="img/sage-pharmacy-img.jpg" class=" card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">School Of Pharmacy</h5>
						<p class="card-text">
							Pharmacy is the science of preparing and dispensing medical drugs. A pharmacist is a licensed healthcare professional who specialises in providing information about different medication and methods of treatment to patients.</p>
						<a href="blocks/pharmachy.php" class="btn btn-outline-dark">Get Location</a>
					</div>
				</div>
			</div>
			<div class="col mx-5">
				<div class="card col-lg-9 mx-5">
					<img src="img/Sage-Admin-img.jpg" class=" card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">Sports Ground</h5>
						<p class="card-text">An activity involving physical exertion and skill in which an individual or a team competes against another or others for entertainment.Among achievement sports the following categories can be distinguished: target, display, strength and endurance.</p>
						<a href="blocks/ground.php" class="btn btn-outline-dark">Get Location</a>
					</div>
				</div>
			</div>
		</div>


		<div class="container py-5">
			<div class="row">
				<div class="col-lg-5">
					<img class="w-100 shadow" src="img/sage-boys-hostel.jpg" />
				</div>
				<div class="col-lg-6">
					<div class="p-5 mt-4">
						<h1 class=" fw-bold display-4">Boys Hostel</h1>
						<p class="lead">Boys' Hostel is one type of residential care services which provides out-of-home care for the youth either at school or at work and who are in need of placement for preparation of family reunion or training for independent living.</p>
						<a href="blocks/boys-hostel.php" class="btn btn-outline-dark">Get Location</a>
					</div>
				</div>
			</div>



			<div class="card-group container my-5">
				<div class="col mx-5">
					<div class="card col-lg-9 mx-5">
						<img src="img/sage-staf-img.jpg" class=" card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">Staff Quarters</h5>
							<p class="card-text">
								Staff Quarters means buildings/quarters constructed by the University for the purpose of allotment to eligible employees of the University for their residence and which are under the control of the University.</p>
							<a href="blocks/staff-quarters.php" class="btn btn-outline-dark">Get Location</a>
						</div>
					</div>
				</div>
				<div class="col mx-5">
					<div class="card col-lg-9 mx-5">
						<img src="img/sage-girlshostel-img.jpg" class=" card-img-top" alt="...">
						<div class="card-body">
							<h5 class="card-title">Girls Hostel</h5>
							<p class="card-text">Girls' Hostel is one type of residential care services which provides out-of-home care for the youth either at school or at work and who are in need of placement for preparation of family reunion or training for independent living.</p>
							<a href="blocks/girls-hostel.php" class="btn btn-outline-dark">Get Location</a>
						</div>
					</div>
				</div>
			</div>



			<div class="container my-3">
				<div class="row p-5 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
					<div class="col-lg-6 p-3 p-lg-6 pt-lg-3">
						<div class="lc-block mb-4">
							<div editable="rich">
								<h1 class="fw-bold display-3">Open Auditorium or Hall &nbsp;<p></p>
									<p></p>
								</h1>
							</div>
						</div>

						<div class="lc-block mb-3">
							<div editable="rich">
								<p class="lead">An Open auditorium is a Open built to enable an audience to hear and watch
									performances. For the number of auditoria (or auditoriums) is expressed as the
									number of screens. Auditoria can be found in entertainment venues, community halls.
								</p>
							</div>
						</div>

						<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
							<a class="btn btn-outline-dark px-4" href="blocks/open-hall.php" role="button">Get Location</a>
						</div>
					</div>
					<div class="col-lg-6  p-4 overflow-hidden shadow-lg">
						<div class="lc-block"><img class="rounded-start" src="img/sage-openhall-img.jpg" alt="This is an image of Management and law" width="500"></div>
					</div>
				</div>
			</div>

			<!-- Close for curent location .... -->




	</main>

	<footer class="text-center text-lg-start text-white" style="background-color: #1c2331">

		<!-- Copyright -->
		<div class="text-left p-3" style="background-color: rgba(73, 66, 66, 0.504)">
			&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;© 2022-23 Copyright:
			<a class="text-white" href="index.php"><img src="img/img-web-icon.png" alt="" height="20" class="d-inline-block align-text-top active"> Real Time Location Tracking</a>
			&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
			<a class=" align-content-end p-3" target="_blank" href="https://github.com/priyanshugour70"><img src="img/img-github-icon.png" width="30" alt="github"></a>
			<a class=" align-content-end p-3" target="_blank" href="https://www.linkedin.com/in/priyanshu-gour-32825024a/"><img src="img/img-linkedin-icon.png" width="38" alt="linkedin"></a>
			<a class=" align-content-end p-3" target="_blank" href="https://www.instagram.com/priyanshugour70/"><img src="img/img-instagram-icon.png" width="40" alt="instagram"></a>
			<a class=" align-content-end p-3" target="_blank" href="https://www.facebook.com/gourpriyanshu"><img src="img/img-facebook-icon.png" width="40" alt="facebook"></a>
			<a class=" align-content-end p-3" target="_blank" href="https://twitter.com/PriyanshuGour07"><img src="img/img-twitter-icon.png" width="40" alt="twitter"></a>
		</div>
	</footer>


	<!-- JavaScript For Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<script src="javascript.js"></script>
	<script src="http://code.jquery.com/jquery-2.2.4.min.js"></script>
</body>

</html>