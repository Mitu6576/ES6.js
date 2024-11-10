// problem Node.1:Write a function that declares variables using var, let, and const. Attempt to reassign each variable within the same function scope, and observe the outcome. Explain any differences in behavior.

let abc = () =>  {
let a = 8;
const b = 7;
var c = 9;

 a = 10;
 c = 50;

console.log(a);
console.log(c);



}
abc();

// output:
// var can be reassigned: 45
// const can not be reassigned: 50
// let can be reassigned: 56


// problem no>.2:Create a function named greet that takes two parameters: name and greeting, with greeting having a default value of "Hello". If no greeting is provided, the function should output "Hello, [name]!".


let greet = (name, greeting = "Hello") => {
    console.log (`${greeting}, ${name}`);
}
greet("mitu");

// output:Hello, mitu


// problem no. 3:Using template literals, write a function that takes three parameters: firstName, lastName, and age, and returns a string in the format: "My name is [firstName] [lastName] and I am [age] years old.".

let literals = (firstName,lastName,age) => {
    console.log(`my name is  ${firstName} ${lastName},I am  ${age} years old`);
}
literals("umme","mitu",28);

// output:my name is  umme mitu,I am  28 years old

// problem no.4:Write an arrow function named add that takes two parameters and returns their sum. Rewrite it as a one-line function without using the return keyword.

let add = (num1, num2) => num1 + num2;
 console.log(add(44, 39));

//  output:83.


// problem No.5:Write a function that accepts any number of arguments and returns the maximum value among them using the spread operator. Test it with varying numbers of arguments.


let array=[10,40,67,45,30]
let max=Math.max(...array);
const numbers = (num) => {
    return num
}
console.log(numbers(max));

// output:67


// problem no.6:Create a function mergeArrays that takes two arrays as arguments and returns a single array containing all elements of the two arrays, without modifying the original arrays, using the spread operator.

let arr1=[2,9,4,8]
let arr2=[3,8,5.2]
let mergeArrays = (a1,a2) => {
return [...a1,...a2]
}
console.log(mergeArrays(arr1,arr2));

// output:[
//   2, 9,   4, 8,
//   3, 8, 5.2]


// problem no. 7:Given an object person with properties name, age, and country, write a function that extracts name and country using object destructuring and returns them in an array.
let person ={ names:"mitu",age:28,country:"bangladesh"};
const extracts = ({names,country}) => {
    return [names,country];
}
console.log(extracts(person));

// output:[ 'mitu', 'bangladesh' ]

// problem no.8:Write a function that takes an array of numbers as input, and uses array destructuring to extract the first, second, and third elements, returning them in an object with properties first, second, and third.


let arrays = [9, 3, 2, 33, 9];
let destructuring = ([first, second, third]) => {
    return{first, second, third};
 }
 
 console.log(destructuring(arrays));

//  output:{ first: 9, second: 3, third: 2 }

// problem no. 9:Create a function that takes an object representing a book with properties title, author, year, and publisher. Use destructuring to extract title and author, and return a formatted string: "Title: [title], Author: [author]".

let book = {
    title: "sesher kobita",
    author: "rabindranath tagore",
    year: 1914,
    publisher: "gitangoly",

}
let properties = ({title,author}) => {
 return `title:${title}, author:${author}`
}
console.log(properties(book));

// output:title:sesher kobita, author:rabindranath tagore

// problem 10. Given an array of numbers, write a function that uses the spread operator to copy the array, then adds a new number at the end without modifying the original array.

const mainArry = [10, 20, 30, 40];

function copyArray (Copy, newNumber){
   return [...Copy, newNumber]
}
console.log(copyArray(mainArry, 20));

// output:[ 10, 20, 30, 40, 20 ]







