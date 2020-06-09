let age = prompt("Insert your age: ");
let driver_license = prompt("Do you have a driver's license?");

switch(true) {
    case (age >= 16 && driver_license == "yes"):
        console.log("You can Drive!");
        break;

    case (age >= 16 && driver_license == "no"):
        console.log("You can't drive, You don't have a driver's license!");
        break;

    case (age < 16):
        console.log("You can't drive, age not allowed!");
        break;

    default:
        console.log("Sorry, try again."); 
}
