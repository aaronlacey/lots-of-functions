//Write a function called `everyDivisible` that takes in a number `n` that is less than 10 and 
//then prints every number less than or equal to 100 that is divisible that number `n`.


function everyDivisible(n) {

    if (n < 10) {

        for (let number = 0; number <= 100; number++) {
            if (number % n === 0) {
                console.log(number);
            }
        }
    }
}

everyDivisible(4);