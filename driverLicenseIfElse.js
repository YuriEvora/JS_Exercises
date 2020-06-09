let age = prompt("Insert your age: ");

if(age >= 16) {
    let driver_license = prompt("Do you have a driver's license?");

    if(driver_license == "yes"){
        console.log("You can Drive!");
    } else {
        console.log("You can't drive, You don't have a driver's license!");
    }
} else {
    console.log("You can't drive, age not allowed!");
}
