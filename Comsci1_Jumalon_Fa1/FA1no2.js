const firstName = prompt("Please enter your first name:");
const lastName = prompt("Please enter your last name:");
const birthYear = prompt("Please enter your birth year:");

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

document.getElementById("greeting").innerText = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;