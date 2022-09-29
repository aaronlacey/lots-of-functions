//Write a function called `arraySummer` that takes in an array of 
//numbers and adds each number in the array together.  Return the total.


function arraySummer(myArray) {
    let sum = 0
    for (let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
        
    }
    return sum
}


console.log(arraySummer([1, 2, 3, 4, 5]));