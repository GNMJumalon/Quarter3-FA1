let name = "GN";
let heightInches = 60;
let weightKg = 40;

let feet = Math.floor(heightInches / 12);
let inches = heightInches % 12;

let weightLbs = weightKg * 2.20462;

function handleClick() {
    let userConsent = confirm("Do you agree to share your personal information with our site?");

    if (userConsent) {
        console.log(`Name: ${name}`);
        console.log(`Height: ${feet}’${inches}”`);
        console.log(`Weight: ${weightLbs.toFixed(3)} lbs`);
    } else {
        console.log("User does not wish to share his/her information.");
    }
}