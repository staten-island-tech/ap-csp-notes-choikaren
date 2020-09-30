//STRING CONCATENATIONS

const myAge = 16;
const yourAge = 24;
const name = "Karen";

console.log (myAge + yourAge);

console.log('Hello my name is' + 'Ed');
//double and singal quotes don't matter
//but if you use single quotes, it will break the string when you use apostrophes

console.log(`Hello it's me and my name is ${name}`);
//backtick 
 
//SAME THING, DIFF WAY OF WRITING
console.log( "My name is " + name + " and I am " + myAge + " years old" )
console.log (`My name is ${name} and I am ${myAge} years old`);

const combined = name + myAge;
console.log(typeof combined); 



//MATH

const num1 = 100;
const num2 = 50;

let val;
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(1,4,543,4523,654,76,12);
val = Math.max(423, 432, 56, 65, 6520);
val = Math.random();

//want whole numbers (multiple by max number)
val = Math.random() *20;
val = Math.floor(Math.random()*20+1 );

console.log(val);


//FUNCTIONS

//function = set of code written to do things multiple things as a task
//ex: eat (go to kitchen, prepare, cook, then eat)

function logger() {
    console.log(name);
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
    console.log("Party Time");
};
//variables inside the function brackets are not global

logger();
//where we execute function

function adder(num1, num2) {
    console.log (num1 + num2);
}

adder(5,10);
//from adder(num1, num2)
//these are parameters

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

//executing function
toUpper(name);
const youtuber = "Traversy Media";
toUpper(youtuber);

const toUpper = () => {

}