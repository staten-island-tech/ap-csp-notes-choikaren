//if statements - way of checking and filtering actions

const age = 16;

if (age > 18) {
    console.log("You are good to go!");
} else if (age === 18) {
    console.log("Just old enough");
}
//triple equals -> doesnt recognize number in string, has to be same value type for function to be true
//double equals -> recognizes number value even in string
else {
    console.log("You are not old enough.")
}

const dice1 = 6;
const dice2 = 2;

if (dice1 === 6 && dice2 === 6) {
    console.log("You rolled a double");
} else {
    console.log("You didn't roll a double");
}

//&& = both values have to be correct
// || runs if either are correct


//OBJECTS AND KEYWORD THIS------------------------------------------------

//properties of the variable

const user = {
    name: "Edwin",
    age: "24",
    married: false,
    purchases: ['phone', 'car', 'laptop'],

    sayName: function () {
        console.log(this.name);
    }
};

console.log(user.purchases);


//THIS------------------------------------------------------

function apples() {
    console.log("apples");
}

console.log(this);

user.sayName();
//user is where the sayName function is invoked 

function saymyAge() {
    console.log(`My age is ${this}`);
}
//${this} doesn't have any value because it's not in any properties
saymyAge();


//SWITCHES-------------------------------------------------
//same as else/if; just different way of doing things
//recommended if there are a lot of situations
const color = "red";

switch (color) {
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not red or blue");
        break;
    

}

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = " Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
        break;
                     
}

console.log (`Today is ${day}`);


//TRAVERSY ARRAYS -------------------------------------------

//create some arrays
//two ways to create arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);

const fruit = ['apple', 'banana', 'orange', 'pear'];

const mixed = [22, "hello", true, undefined, null, {a:1, b:1}, new Date()];
console.log(mixed);


let val;

//get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//get single value
val = numbers[3];
//insert into array
numbers [2] = 100;
//find index of value
val = numbers.indexOf(36);

//mutating arrays
//add on to end
numbers.push(250);
//add on to front
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice values 
numbers.splice(1,3);
//reverse
numbers.reverse();

//Concatenate arrays
val = numbers.concat(numbers2);

//sorting arrays
val = fruit.sort();
val = numbers.sort();

//use the "compare function"
val = numbers.sort(function(x,y){
    return x-y;
});

//reverse sort
val = numbers.sort(function(x,y){
    return y-x;
});

//Find
function under50(num) {
    return num <50;
}

val = numbers.find (under50);

function over50(num) {
    return num >50;
}

val = numbers.find (over50);

console.log(numbers);
console.log (val);

