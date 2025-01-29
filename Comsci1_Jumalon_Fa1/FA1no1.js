
var nickname = "GN";
var height = 60;
var weight = 40;


var height2 = height / 12;
var weight2 = weight * 2.20462;

var roundedFeet = Math.round(height2 * 10) / 10; 
var newfeet = roundedFeet.toString().replace('.', "'");


let message = `Name: ${nickname}\nHeight: ${newfeet}”\nWeight: ${weight2} lbs`;

alert(message);