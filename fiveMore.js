//Write a function called `fiveMore` that takes in an array of numbers and 
//adds 5 to each odd number then returns the updated array.


function fiveMore(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 !== 0) {
            myArray[i] += 5;
        }


    }
    return myArray;

}

console.log(fiveMore([1, 2, 3, 4, 5]));