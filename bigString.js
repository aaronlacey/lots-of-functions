//Write a function called `bigString` that takes in 2 strings and returns which one is bigger.  
//If the strings are equal in size, tell the user and prints both.

function bigString(str1, str2) {
    if (str1.length > str2.length) {
        return str1;
    }
    else if (str1.length < str2.length) {
        return str2;
    }

    else if (str1.length === str2.length) {
        console.log(`${str1} is equal in length to ${str2} `);
    }
}
console.log(bigString("blue", "red"));