/* jshint esversion:6 */
$(document).ready(function () {
    // array of cars
    var cars = [
        // motorbike
        {
            name: "Harley",
            image: "img/harleyBike.jpg",
            makeModel: "1986 Harley Davidson Street 500",
            minDays: "1",
            maxDays: "5",
            minPassengers: "1",
            maxPassengers: "1",
            costPerDay: 109,
            litresPer100km: "3.7",
            wheelchairFriendly: false,
        },
        {
            name: "Honda",
            image: "img/hondaBike.jpg",
            makeModel: "1969 Honda CB750",
            minDays: "1",
            maxDays: "5",
            minPassengers: "1",
            maxPassengers: "1",
            costPerDay: 109,
            litresPer100km: "3.7",
            wheelchairFriendly: false,
        },
        // small cars
        {
            name: "DeLorean",
            image: "img/img1.jpg",
            makeModel: "1981 DeLorean DMCs-12",
            minDays: "1",
            maxDays: "10",
            minPassengers: "1",
            maxPassengers: "2",
            costPerDay: 129,
            litresPer100km: "8.5",
            wheelchairFriendly: false,
        },
        {
            name: "Gangster Special",
            image: "img/gangsterCar.jpg",
            makeModel: "1950 Cadillac Sixty Special",
            minDays: "1",
            maxDays: "10",
            minPassengers: "1",
            maxPassengers: "2",
            costPerDay: 129,
            litresPer100km: "8.5",
            wheelchairFriendly: true,
        },
        {
            name: "Beetle",
            image: "img/volkswagenCar.jpg",
            makeModel: "1954 Volkswagen Beetle",
            minDays: "1",
            maxDays: "10",
            minPassengers: "1",
            maxPassengers: "2",
            costPerDay: 129,
            litresPer100km: "8.5",
            wheelchairFriendly: true,
        },
        // large cars
        {
            name: "Hippie Van",
            image: "img/volkswagenBus.jpg",
            makeModel: "1980 Volkswagen Kombi",
            minDays: "3",
            maxDays: "10",
            minPassengers: "1",
            maxPassengers: "5",
            costPerDay: 144,
            litresPer100km: "9.7",
            wheelchairFriendly: true,
        },
        {
            name: "Defender",
            image: "img/landRoverCar.jpg",
            makeModel: "1986 Land Rover Defender",
            minDays: "3",
            maxDays: "10",
            minPassengers: "1",
            maxPassengers: "5",
            costPerDay: 144,
            litresPer100km: "8.7",
            wheelchairFriendly: true,
        },
        // motor homes
        {
            name: "Airstream",
            image: "img/airstreamMotorHome.jpg",
            makeModel: "1993 Airstream Globetrotter",
            minDays: "2",
            maxDays: "15",
            minPassengers: "2",
            maxPassengers: "6",
            costPerDay: 200,
            litresPer100km: "17",
            wheelchairFriendly: true,

        },
        {
            name: "Coachmen",
            image: "img/coachmenMotorHome.jpg",
            makeModel: "1978 Dodge Coachmen",
            minDays: "2",
            maxDays: "15",
            minPassengers: "2",
            maxPassengers: "6",
            costPerDay: 200,
            litresPer100km: "17",
            wheelchairFriendly: true,
        },

    ];

    // inputted variables
    var fromdate;
    var todate;
    var difference;
    var passengers;
    var days;
    var tickbox = document.getElementById('wheelchair');
    var distanceInput = document.getElementById('enterDistance');
    var selectedCar;
    var wheelchairFriendlyCars;
    var finalFuelPrice;

    // on click of featured images, instantly appears with the featured car in the result and more info
    $('#bigImage').click(function () {
        $('.featuredCars').hide();
        $('#viewAllCars').hide();
        $('.resultsSection').css('visibility', 'visible');
        $('.moreInformation').css('visibility', 'visible');
        var resultsOutput = $('.searchResults');
        resultsOutput.html(`
    <div class="resultItem">
        <div class="resultImg">
            <img class="previewImg" src="${cars[2].image}" alt="">
        </div>
        <div class="resultInfo">
            <h3>${cars[2].name}</h3>
            <h6>${cars[2].makeModel}</h6>
            <p>${cars[2].litresPer100km}/100km</p>
        </div>
        <div class="priceTag">
            <h4>$${cars[2].costPerDay}<br>/Day</h4>
        </div>
    </div>
    `);

        var carMoreInformation = $('.moreInformation');
        carMoreInformation.html(`
        <div class="moreInfoHeader">
            <div class="moreInfoCarDetails">
                <h2>${cars[2].name}</h2>
                <h5 class="carModel">${cars[2].makeModel}</h5>
            </div>
            <div class="moreInfoCarImage">
                <img src="${cars[2].image}" alt="">
            </div>
        </div>
        <div class="moreInfoDescription">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Purus non enim praesent elementum facilisis leo vel fringilla est. Ultrices eros in cursus turpis massa tincidunt dui.</p>
        </div>
    </div>
    `);
    });

    $('#topImg').click(function () {
        $('.featuredCars').hide();
        $('#viewAllCars').hide();
        $('.resultsSection').css('visibility', 'visible');
        $('.moreInformation').css('visibility', 'visible');
        var resultsOutput = $('.searchResults');
        resultsOutput.html(`
    <div class="resultItem">
        <div class="resultImg">
            <img class="previewImg" src="${cars[3].image}" alt="">
        </div>
        <div class="resultInfo">
            <h3>${cars[3].name}</h3>
            <h6>${cars[3].makeModel}</h6>
            <p>${cars[3].litresPer100km}/100km</p>
        </div>
        <div class="priceTag">
            <h4>$${cars[3].costPerDay}<br>/Day</h4>
        </div>
    </div>
    `);

        var carMoreInformation = $('.moreInformation');
        carMoreInformation.html(`
        <div class="moreInfoHeader">
            <div class="moreInfoCarDetails">
                <h2>${cars[3].name}</h2>
                <h5 class="carModel">${cars[3].makeModel}</h5>
            </div>
            <div class="moreInfoCarImage">
                <img src="${cars[3].image}" alt="">
            </div>
        </div>
        <div class="moreInfoDescription">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Purus non enim praesent elementum facilisis leo vel fringilla est. Ultrices eros in cursus turpis massa tincidunt dui.</p>
        </div>
    </div>
    `);
    });

    $('#bottomImg').click(function () {
        $('.featuredCars').hide();
        $('#viewAllCars').hide();
        $('.resultsSection').css('visibility', 'visible');
        $('.moreInformation').css('visibility', 'visible');
        var resultsOutput = $('.searchResults');
        resultsOutput.html(`
    <div class="resultItem">
        <div class="resultImg">
            <img class="previewImg" src="${cars[7].image}" alt="">
        </div>
        <div class="resultInfo">
            <h3>${cars[7].name}</h3>
            <h6>${cars[7].makeModel}</h6>
            <p>${cars[7].litresPer100km}/100km</p>
        </div>
        <div class="priceTag">
            <h4>$${cars[7].costPerDay}<br>/Day</h4>
        </div>
    </div>
    `);

        var carMoreInformation = $('.moreInformation');
        carMoreInformation.html(`
        <div class="moreInfoHeader">
            <div class="moreInfoCarDetails">
                <h2>${cars[7].name}</h2>
                <h5 class="carModel">${cars[7].makeModel}</h5>
            </div>
            <div class="moreInfoCarImage">
                <img src="${cars[7].image}" alt="">
            </div>
        </div>
        <div class="moreInfoDescription">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Purus non enim praesent elementum facilisis leo vel fringilla est. Ultrices eros in cursus turpis massa tincidunt dui.</p>
        </div>
    </div>
    `);
    });

    // view all cars onclick
    $('#viewAllCars').click(function () {
        $('.featuredCars').hide();
        $('#viewAllCars').hide();
        $('.resultsSection').css('visibility', 'visible');
        $('.fuelCosts').css('visibility', 'visible');

        var resultsOutput = $('.searchResults');
        for (var i = 0; i < cars.length; i++) {
            var car = cars[i];
            resultsOutput.append(`
        <div class="resultItem" id="${i}">
            <div class="resultImg">
                <img class="previewImg" src="${car.image}" alt="">
            </div>
            <div class="resultInfo">
                <h3>${car.name}</h3>
                <h6>${car.makeModel}</h6>
                <p>${car.litresPer100km}/100km</p>
            </div>
            <div class="priceTag">
                <h4>$${car.costPerDay}<br>/Day</h4>
            </div>
        </div>
        `);
        }
    showMoreInformation();
    });



    // form validation
    var parsleyForm = $("#parsleyValidation").parsley();
    $('#parsleyValidation').find('#searchResultsButton').click(function (event) {
        event.preventDefault();
        parsleyForm.validate();
    });

    parsleyForm.subscribe('parsley:form:success', function () {
        fromdate = $("#frompicker").datepicker("getDate");
        todate = $("#topicker").datepicker("getDate");
        difference = fromdate - todate;
        days = Math.abs(Math.ceil(difference / (1000 * (60 * 60) * 24)));
        passengers = $('#passengerpicker').val();
        $('#viewAllCars').hide();
        $('.featuredCars').hide();
        $('.resultsSection').css('visibility', 'visible');
        $('.fuelCosts').css('visibility', 'visible');
        showCarResults();
    });

    $(function () {
        $("#frompicker").datepicker({
            dateFormat: "dd-mm-yy"
        });
        $("#topicker").datepicker({
            dateFormat: "dd-mm-yy"
        });
    });

    function showCarResults(){
        var resultsOutput = $('.searchResults');
        resultsOutput.html(` `);
        for (var i = 0; i < cars.length; i++) {
            var car = cars[i];
            // showing car results
            if ((days >= car.minDays && days <= car.maxDays) && (passengers >= car.minPassengers && passengers <= car.maxPassengers)) {
                resultsOutput.append(`
                <div class="resultItem" id="${i}">
                    <div class="resultImg">
                        <img class="previewImg" src="${car.image}" alt="">
                    </div>
                    <div class="resultInfo">
                        <h3>${car.name}</h3>
                        <h6>${car.makeModel}</h6>
                        <p>${car.litresPer100km}/100km</p>
                    </div>
                    <div class="priceTag">
                        <h4>$${car.costPerDay}<br>/Day</h4>
                    </div>
                </div>
                `);
            }
        }
        showMoreInformation();
    }
    


    // onclick for more information visibility
    function showMoreInformation() {
        var resultItems = document.querySelectorAll('.resultItem');
        Array.from(resultItems).forEach(function (resultItems) {
            resultItems.addEventListener('click', function () {
                selectedCar = cars[this.id];
                $('.moreInformation').css('visibility', 'visible');
                var carMoreInformation = $('.moreInformation');
                carMoreInformation.html(`
                    <div class="moreInfoHeader">
                        <div class="moreInfoCarDetails">
                            <h2>${cars[this.id].name}</h2>
                            <h5 class="carModel">${cars[this.id].makeModel}</h5>
                        </div>
                        <div class="moreInfoCarImage">
                            <img src="${cars[this.id].image}" alt="">
                        </div>
                    </div>
                    <div class="moreInfoDescription">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium fusce. Purus non enim praesent elementum facilisis leo vel fringilla est. Ultrices eros in cursus turpis massa tincidunt dui.</p>
                        <button id="bookNow">BOOK NOW</button>
                    </div>
                </div>
                `);

                // function that calculates the total cost of fuel
                distanceInput.addEventListener('keyup', function () {
                    var totalCost = $('.totalCost');
                    var input = Number(distanceInput.value);
                    // computation of total fuel cost
                    var litrePerKM = selectedCar.litresPer100km / 100;
                    var costPerLitre = 2.7;
                    finalFuelPrice = input * (litrePerKM * costPerLitre);
                    // insert that total price into the HTML
                    totalCost.html(`
        <p>Your estimated fuel cost is $${finalFuelPrice.toFixed(2)}</p>
        `);
                });

                // function that calculates the total cost of the rental, which combines the number of days * the estimated fuel cost
                $('#bookNow').click(function () {
                    var moreInfoOutput = $('.moreInfoDescription');
                    var costOfDays = (days * selectedCar.costPerDay);
                    var totalPriceOfRental = costOfDays + finalFuelPrice;
                    moreInfoOutput.html(`
            <p>The total cost of you car rental for ${days} days is $${totalPriceOfRental}</p>
            <button id="bookNow">BOOK NOW</button>
        `);
                });

            });
        });
    }

    // end of jQuery master function
});