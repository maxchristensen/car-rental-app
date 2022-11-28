// For this project, I am following the AirBNB JavaScript code style guide

/** JAVASCRIPT CODE TODO LIST
 * Create project array based on brief dataset
 * Check Form Validation - Ensure that every section of the form is filled out.
 * Display appropriate results based on the users input
 *  on click function on the search button
 * Create and computate total fuel price based on users inputted distance
 */

$(document).ready(function (){

// array of cars
var cars = [
    // motorbike
    {
        name: "Harley",
        image: "img/img1.jpg",
        makeModel: "1986 Harley Davidson Street 500",
        minDays: "1",
        maxDays: "5",
        minPassengers: "1",
        maxPassengers: "1",
        costPerDay: "$109",
        litresPer100km: "3.7",
    },
    {
        name: "Honda",
        image: "img/img1.jpg",
        makeModel: "1969 Honda CB750",
        minDays: "1",
        maxDays: "5",
        minPassengers: "1",
        maxPassengers: "1",
        costPerDay: "$109",
        litresPer100km: "3.7",
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
    },
    {
        name: "Gangster Special",
        image: "img/img2.jpg",
        makeModel: "1950 Cadillac Sixty Special",
        minDays: "1",
        maxDays: "10",
        minPassengers: "1",
        maxPassengers: "2",
        costPerDay: "$129",
        litresPer100km: "8.5",
    },
    {
        name: "Beetle",
        image: "img/img2.jpg",
        makeModel: "1954 Volkswagen Beetle",
        minDays: "1",
        maxDays: "10",
        minPassengers: "1",
        maxPassengers: "2",
        costPerDay: "$129",
        litresPer100km: "8.5",
    },
    // large cars
    {
        name: "Hippie Van",
        image: "img/img2.jpg",
        makeModel: "1980 Volkswagen Kombi",
        minDays: "3",
        maxDays: "10",
        minPassengers: "1",
        maxPassengers: "5",
        costPerDay: "$144",
        litresPer100km: "9.7",
    },
    {
        name: "Defender",
        image: "img/img2.jpg",
        makeModel: "1986 Land Rover Defender",
        minDays: "3",
        maxDays: "10",
        minPassengers: "1",
        maxPassengers: "5",
        costPerDay: "$144",
        litresPer100km: "8.7",
    },
    // motor homes
    {
        name: "Airstream",
        image: "img/img3.jpg",
        makeModel: "1993 Airstream Globetrotter",
        minDays: "2",
        maxDays: "15",
        minPassengers: "2",
        maxPassengers: "6",
        costPerDay: "$200",
        litresPer100km: "17",
    },
    {
        name: "Coachmen",
        image: "img/img3.jpg",
        makeModel: "1978 Dodge Coachmen",
        minDays: "2",
        maxDays: "15",
        minPassengers: "2",
        maxPassengers: "6",
        costPerDay: "$200",
        litresPer100km: "17",
    },

];

// form validation
var parsleyForm = $("#parsleyValidation").parsley();

$('#parsleyValidation').find('#searchResultsButton').click(function(){
    parsleyForm.validate();
})


// Assign DatePickers
$(function(){
    $("#frompicker").datepicker({
        dateFormat: "dd-mm-yy"
    });
    $("#topicker").datepicker({
        dateFormat: "dd-mm-yy"
    });
});

// Onclick of date button 
$("#dateButton").click(function(){
    var fromdate = $("#frompicker").datepicker("getDate");
    var todate = $("#topicker").datepicker("getDate");
    console.log(fromdate);
    console.log(todate);
    var difference = fromdate - todate;
    console.log(difference);
    var days = Math.abs(Math.ceil(difference / (1000 * (60 * 60) * 24)));
    console.log(days);
});





});