let prime_number = prompt ("Insert your number: ");
let div = 0;

if(!isNaN(prime_number)) {
    if(prime_number != 1){
        for (let i = 1; i <= prime_number; i++){
            if(prime_number % i == 0) {
                div++;
            }
        }

        if(div == 2) {
            console.log(prime_number + " is a prime number!");
        } else {
            console.log(prime_number + " isn't a prime number!")
        }
    }
}
