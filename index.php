<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome | PG Life</title>

    <?php
    include "includes/head_links.php";
    ?>
    <link href="css/home.css" rel="stylesheet" />

    <style>
        /* Add your custom styles here */
        body {
            background-image: url('img/room.jpg'); /* Replace 'img/background.jpg' with your actual background image URL */
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            color: #fff;
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
        }

        .banner-container {
            background-color: rgba(52, 152, 219, 0.8);
            padding: 20px;
            text-align: center;
        }

        .city-card-container {
            margin-bottom: 20px;
        }

        .city-card {
            background-color: #ecf0f1;
            border-radius: 50%;
            overflow: hidden;
            width: 120px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
        }

        .city-card:hover {
            background-color: #2c3e50;
        }

        .city-img {
            max-width: 100%;
            max-height: 100%;
        }
    </style>
</head>

<body>
    <?php
    include "includes/header.php";
    ?>

    <div class="banner-container">
        <h2 class="white pb-3">Discover the Perfect PG Experience</h2>

        <form id="search-form" action="property_list.php" method="GET">
            <div class="input-group city-search">
                <input type="text" class="form-control input-city" id='city' name='city' placeholder="Enter your city to search for PGs" />
                <div class="input-group-append">
                    <button type="submit" class="btn btn-secondary">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>

    <div class="page-container">
        <h1 class="city-heading">
            Major Cities
        </h1>
        <div class="row">
            <div class="city-card-container col-md">
                <a href="property_list.php?city=Delhi">
                    <div class="city-card rounded-circle">
                        <img src="img/delhi.png" class="city-img" alt="Delhi" />
                    </div>
                </a>
            </div>

            <div class="city-card-container col-md">
                <a href="property_list.php?city=Mumbai">
                    <div class="city-card rounded-circle">
                        <img src="img/mumbai.png" class="city-img" alt="Mumbai" />
                    </div>
                </a>
            </div>

            <div class="city-card-container col-md">
                <a href="property_list.php?city=Bengaluru">
                    <div class="city-card rounded-circle">
                        <img src="img/bangalore.png" class="city-img" alt="Benglore" />
                    </div>
                </a>
            </div>

            <div class="city-card-container col-md">
                <a href="property_list.php?city=Hyderabad">
                    <div class="city-card rounded-circle">
                        <img src="img/hyderabad.png" class="city-img" alt="Hydrabad" />
                    </div>
                </a>
            </div>
        </div>
    </div>

    <?php
    include "includes/signup_modal.php";
    include "includes/login_modal.php";
    include "includes/footer.php";
    ?>

</body>

</html>
