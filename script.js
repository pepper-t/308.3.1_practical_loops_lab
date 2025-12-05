

// Part 1: Fizz Buzz

// To begin, solve the following classic “Fizz Buzz” problem.There are a few different ways to do this - experiment with what you think is the most efficient.
// Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.

// Accomplish the following:

// Loop through all numbers from 1 to 100.

// for (let i=1; i<=100; i++){
    // console.log(i)
// }

// If a number is divisible by 3, log “Fizz.”

// for (let anyNumber=0; anyNumber<=100; anyNumber++){
// if(anyNumber%3==0){
// console.log('Fizz');
// }

// }

// If a number is divisible by 5, log “Buzz.”

//for (let anyNumber=0; anyNumber<=100; anyNumber++){
//if(anyNumber%5==0){
//console.log('Buzz');
//}

//}

// If a number is not divisible by either 3 or 5, log the number.


 for (i=1; i<=100; i++){
     if (i % 3 !== 0 || i % 5 !== 0){
console.log(i);
     }
     
 }



// If a number is divisible by both 3 and 5, log “Fizz Buzz.”


// for (i=1; i<=100; i++){
    // if (i % 3===0 && i % 5===0){
//  console.log('Fizz Buzz');
    // }
   
//  }

// Part 3: Feeling Loopy
// As a final task, solve the following practical problem regarding string processing.
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with 
// CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in 
// different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26;"
let newLine = "";//empty string to receive new data without '\n'

//The for...in loop will iterate over the string indices as strings.

let=0;
for (const i in str) {   // i is included to play a role in the number of iterations.
const currentIndex = num(i);   //Converting each string in the index into numbers.
const char = str[currentIndex];
}
//Finally....
    if(char === '\n' || currentIndex=== str.length--){  //(it is .length-1) as it iterates and goes through each cell the 
    // data is removed.
    // If we are at the last character, we must append it before printing.
        if (currentIndex === str.length --) {
            newLine += char;
        }
//for (let index = 0; index < array.length; index++) {
  //  const element = array[index];
    console.log(newLine);
    
}    
else {
        // If it's a regular character (not a newLine), append it to the current line.
        newLine += char;
    }

//for (char in str) {
	//if (str[char] == '\n') {
	//	continue;
	//}

	//console.log(str);
//}

//After further research, I came up with the formula below:













