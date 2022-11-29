/** JAVASCRIPT CODE TODO LIST
 * Display appropriate results based on the users input
 * Create hide show for the more information section of the results
 * Create and computate total fuel price based on users inputted distance
 */

$(document).ready(function (){
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
        costPerDay: "$109",
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
        costPerDay: "$109",
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
        costPerDay: "$129",
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
        costPerDay: "$129",
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
        costPerDay: "$129",
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
        costPerDay: "$144",
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
        costPerDay: "$144",
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
        costPerDay: "$200",
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
        costPerDay: "$200",
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
var tickbox = $("#wheelchair");
var carResults = $('.results');
var moreCarInfo = $('.moreInformation');

// form validation
var parsleyForm = $("#parsleyValidation").parsley();
$('#parsleyValidation').find('#searchResultsButton').click(function(event){
    event.preventDefault();
    parsleyForm.validate();
});

parsleyForm.subscribe('parsley:form:success', function() {
    fromdate = $("#frompicker").datepicker("getDate");
    todate = $("#topicker").datepicker("getDate");
    difference = fromdate - todate;
    days = Math.abs(Math.ceil(difference / (1000 * (60 * 60) * 24)));
    passengers = $('#passengerpicker').val();
    console.log('great success, very nice!');
    $('.featuredCars').hide();
    $('.resultsSection').css('visibility', 'visible');
    $('.fuelCosts').css('visibility', 'visible');
    showCarResults();
});

$(function(){
    $("#frompicker").datepicker({
        dateFormat: "dd-mm-yy"
    });
    $("#topicker").datepicker({
        dateFormat: "dd-mm-yy"
    });
});


/** function to show results in the DOM based on inputed information into the form
    * run a for loop through my cars array
    * run if statement that compare number of days entered in for to being more than/equal to the min days of the cars in the array and less than/equal to the max days of the cars in the array
    * run if statement that compare number of passengers entered in for to being more than/equal to the min passengers of the cars in the array and less than/equal to the max passengers of the cars in the array
    * run if statement that checks if the user has checked the wheelchair accessible option for the cars
    * output results into the inner HTML of the results div
*/

function showCarResults(){
    console.log("this is working :)");
    var resultsOutput = $('.searchResults');
    resultsOutput.html(' ');
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        if ((days > car.minDays && days < car.maxDays) && (passengers > car.minPassengers && passengers < car.maxPassengers)) {
            resultsOutput.append(`
            <div class="resultItem">
                <div class="resultImg">
                    <img class="previewImg" src="${car.image}" alt="">
                </div>
                <div class="resultInfo">
                    <h3>${car.name}</h3>
                    <h6>${car.makeModel}</h6>
                    <p>${car.litresPer100km}/100km</p>
                </div>
                <div class="priceTag">
                    <h4>${car.costPerDay}<br>/Day</h4>
                </div>
            </div>
            `);
        showMoreInformation();
        } else {

        }

        
        }
}

// onclick for more information visibility
function showMoreInformation() {
    var resultItems = document.querySelectorAll('.resultItem');
    Array.from(resultItems).forEach(function(resultItems){
        resultItems.addEventListener('click', function() {
            $('.moreInformation').css('visibility', 'visible');
        });
    });
}
// end of jQuery master function
});

