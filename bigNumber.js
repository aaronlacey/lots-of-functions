//Write a function called `bigNumber` that takes in 2 numbers and returns which one is greater. 
//If the numbers are equal tell the user.

function twoNum(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else if (num1 < num2){
        return num2
    }
    else if(num1 === num2)
    console.log(`${num1} is equal to ${num2}`);
}

console.log(twoNum(10, 10));


