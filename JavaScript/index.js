// 0
// console.log("Hello World with JavaScript");


// 1
// variables
// var myName = "Zohaib Ali Thaheem";
// console.log(myName);


//2
// Naming Convention Camel Case
// var myAge = 20; // valid
// var _myAge = 20; // valid
// // var 1myName = "Zohaib"; // invalid
// var _1my__Age = 20; // valid
// var $myAge = 20; // valid


//3
// Data types
// var myName = "Zohaib Ali Thaheem";
// console.log(myName);

// var myAge = 20;
// console.log(myAge);

// var iAmThaheem = true;
// console.log(iAmThaheem);

// var iAmHassan = false;
// console.log(iAmHassan);

// // type of operator
// console.log(typeof(myName));
// console.log(typeof(myAge));
// console.log(typeof(iAmThaheem));
// console.log(typeof(iAmHassan));


// 4
// Chanllanges
// var sum = 10 + "20";
// console.log(sum);   // 1020

// var minus = 9 - "5";
// console.log(minus);   // 4  // else bug

// var stringValue1 = "Java" + "Script";
// console.log(stringValue1); // JavaScript

// var space =  " " + " ";
// console.log(space); // spaces

// var zero = " " + 0;
// console.log(zero);  // space0

// var stringValue2 = "Zohaib" -  "Thaheem";
// console.log(stringValue2);  // NaN (Not a Number)  

// var true1 = true + true;
// console.log(true1); // 2

// var true2 = true + false;
// console.log(true2); // 1

// var true3 = false + true;
// console.log(true3); // 1

// var true4 = false - true;
// console.log(true4); // -1

// var true5 = false + false;
// console.log(true5); // 0

// var true6 = false - false;
// console.log(true6); // 0

// var true7 = true - true;
// console.log(true7); // 0


// 5
// null vs undefined
// var isSheDoctor = null;
// console.log(isSheDoctor);
// console.log(typeof(isSheDoctor)); // bug

// var isHeENgineer;
// console.log(isHeENgineer);
// console.log(typeof(isHeENgineer))


// 6
// Expressions and Operators
// Assignment operator
// var x = 5;
// var y = 6;
// console.log("Is both the x and y are equal or not "+ x == y);


// Arithmetic operators
// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3/3);
// console.log(3%3);

// Incremenet and Decrement operators

// var a = 5;
// console.log(a);
// a++;
// console.log(a);
// ++a;
// console.log(a);

// var a = 5;
// console.log(a);
// a--;
// console.log(a);
// --a;
// console.log(a);


// Comparison operators
// var a = 21;
// var b = 10;

// console.log(a == b);
// console.log(a != b);
// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);


// Logical operators
// var a = 30;
// var b = -20;

// console.log(a > b && b > 0);
// console.log(a > b || b > 0);
// console.log(!(a==b));
// console.log(!true);


// String operator
// console.log("Hello World");
// console.log("Hello"+" World");

// Challange
// console.log(3**3);
// console.log(21+"21");
// console.log(21+"Zohaib");

// swap two numbers
// var a = 21;
// var b = 10;
// console.log("value of a before swap is : "+a);
// console.log("value of b before swap is : "+b);
// var temp = a;
// a = b;
// b = temp;
// console.log("value of a after swap is : "+a);
// console.log("value of b after swap is : "+b);

// without third variable 
// var c = 5;
// var d = 10;
// console.log("value of a before swap is : "+c);
// console.log("value of b before swap is : "+d)
// c = c + d;  // 15  
// d = c - d;  // 5
// c = c - d;  // 10;
// console.log("value of a after swap is : "+c);
// console.log("value of b after swap is : "+d);

// difference == (check only value) vs === (check value and data type)
// var a = 5;
// var b = '5';

// console.log(a == b);
// console.log(a === b);


// 7
// Control Statements
// if else

// var tomr = "rain";
// if(tomr == "rain") {
//     console.log("take a raincot");
// } else {
//     console.log("No need of a raincot");
// }

// Challange

// var leapYear = 2023 ;
// if(leapYear % 4 == 00 && leapYear % 100 != 0 || leapYear % 400 == 0) {
//     console.log("Leap year");
// } else {
//     console.log("Not leap year");  
// }

// Condition (ternary) operator
// which takes only 3 operands

// var a = 6;
// console.log((a <= 5) ? "yes" : "no");


// Switch Statement
// Find area of circle, triangle and rectangle

// var area = "triangle";
// var PI=3.142, l=5, b=4, r=3;

// switch(area) {
//     case "circle":
//         console.log("the area of the circle is : "+ PI*r**2);
//         break;
//     case "triangle":
//         console.log("the area of the triangle is : "+ (l*b)/2);
//         break;
//     case "rectangle":
//         console.log("the area of the rectangle is : "+ (l*b));
//         break;
//     default:
//         console.log("please enter valid data");
//     } 


// While Loop

// var a = 0;
// while(a<=10) {
//     console.log(a);
//     a++;
// }


// Do-while Loop

// var a = 0;
// do{
//     console.log(a);
//     a++; // if I am not using it then this loop will be infinte loop
// } while(a<=10);

// for Loop

// for(var num=0; num<=10; num++) {
//     console.log(num);
// }

// Challange 
// print table of 8
// for(var i=1; i<=10; i++) {
//     console.log(8+"*"+i+"="+i*8);
// }


// 8
// Function

// functiond definition
// function sum() {
//     var a=10,b=20;
//     var total=a+b;
//     console.log(total);
// }

// function calling
// sum();

// function parameter
// function sum(a,b) {
//     var total=a+b;
//     console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);

// function expressions
// function sum(a,b) {
//     var total=a+b;
//     console.log(total);
// }

// var funEx = sum(2,3);
// funEx;

// return keyword
// function sum(a,b) {
//     return total=a+b;
    
// }

// var funEx = sum(2,3);
// console.log(funEx);

// Anonymous function expressions
// var funEx = function(a,b) {
//     return total = a+b;
// }
// console.log(funEx(2,3));


// 9
// Modern JavaScript

// var => function scope
// let and const => block scope


// var

// var myName = "Zohaib";
// console.log(myName);

// myName = "Sardar";
// console.log(myName);

// let

// let myName = "Zohaib";
// console.log(myName);

// myName = "Sardar";
// console.log(myName);

// const

// const myName = "Zohaib";
// console.log(myName);

// myName = "Sardar";
// console.log(myName);

// function and block scope

// function bioData() {
//     let myFirstName = "Zohaib";
//     console.log(myFirstName);
//     if(true) {
//         let myLastName = "Thaheem";
//         console.log("inner "+myLastName);
//         console.log("inner "+myFirstName);
//     }
//     console.log("outter "+myLastName);
// }
// bioData();


// Template literals ( Template String )
// for(let num=1; num<=10; num++) {
//     let tableOf=12;
//     // console.log(tableOf+" * "+num+" = "+tableOf * num);
//     console.log(` ${tableOf} * ${num} = ${tableOf * num}`);
// }


// Default parameter / argument
// function multi(a,b=21) {
//     return a*b;
// }
// console.log(multi(3));


// Fat Arrow function
//Normal function
// function sum(a,b) {
//     let total = a+b;
//     return `the sum of the total numbers is ${total}`;
// }
// console.log(sum(3,4));

// convert in to arrow function

// const sum = (a,b) => {
//     let total = a+b;
//     return `the sum of the total numbers is ${total}`;
// }
// console.log(sum(3,4));

// const sum = (a,b) => `the sum of the two numbers is ${a+b}`;
// console.log(sum(4,5));


// 10
// Arrays
// var myFriends = new Array; -> optional
// var myFriends = ["Saeed","Hassan","Sandeep","Ahsan","Wusatullah"];

// In JavaScript index start from 0, and first index is lower and last one is upper

// Traversal of an Array

// var myFriends = ["Saeed","Hassan","Sandeep"];
// console.log(myFriends[1]);

// check length of an array
// console.log(myFriends.length);
// console.log(myFriends[myFriends.length-1]);

// For loop
// for(var i=0; i<myFriends.length; i++) {
//     console.log(myFriends[i]); 
// }

// For..in loop
// var myFriends = ["Saeed","Hassan","Sandeep"];
// for(let elements in myFriends) {
//     console.log(elements);
// }

// For..of loop
// var myFriends = ["Saeed","Hassan","Sandeep"];
// for(var elements of myFriends) {
//     console.log(elements);
// }

// forEach() loop
// var myFriends = ["Saeed","Hassan","Sandeep"];
//  myFriends.forEach(function (element,index,array) {
//     console.log(element +" index : "+ index +" array : "+ array);
//  } );

 // fat arrrow function
//  var myFriends = ["Saeed","Hassan","Sandeep"];
//  myFriends.forEach((element,index,array) => {
//     console.log(element +" index : "+ index +" array : "+ array);
//  } );


// Searching and Filter in an Array 

// indexOf()
// var myFriend = ["Saeed","Hassan","Ahsan",];
// console.log(myFriend.indexOf("Hassan",2));

// lastIndexOf()
// var myFriend = ["Saeed","Hassan","Ahsan"];
// console.log(myFriend.lastIndexOf("Hassan",3));

// includes()
// var myFriend = ["Saeed","Hassan","Ahsan"];
// console.log(myFriend.includes("Hassan"));


// Array CRUD

// push() to add element at the end
// const animals = ['dog', 'goats', 'sheep'];
// // const count = animals.push('chicken');
// animals.push('chicken','cow','cat');
// console.log(animals);
// // console.log(count);

// unshift() to add element at the first
// const animals = ['goat','dog','cat'];
// animals.unshift('buffalo');
// console.log(animals);

// pop() to remove element last
// const plants = ['sunflower','tomato','cabbage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// shift() to remove element first
// const plants = ['sunflower','tomato','cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);


// Challange
// const months = ['Jan','march','April','June','July'];
// months.push('Dec');
// console.log(months);

// const months = ['Jan','march','April','June','July'];
// const indexOfMarch = months.indexOf('June');
// if (indexOfMarch != -1) {
//     // const updateMonth = months.(1,1,'March');
//     const updateMonth = months.splice(indexOfMarch,1);
// }
// console.log(months);


// map() method
// let arr = [1,2,3,4,8,9,4,3,2,15];
// let newArr = arr.map((currElement,index,arr) => {
//     return currElement > 9;
// })
// console.log(arr);
// console.log(newArr);

// let newArr = arr.map((currElement,index,arr) => {
//     return `the index no =  ${index} and the value is ${currElement} belongs to the ${arr}`
// })
// console.log(newArr);

// Challange
// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((currElement) => {
//     return Math.sqrt(currElement);
// })
// console.log(arrSqr);

// let arr = [2,3,4,6,8];
// let arr2 = arr.map((currElement) => {
//     return currElement * 2;
// }).filter((currElement) => {
//     return currElement < 10;
// })
// console.log(arr2);


// reduce() method is used to convert 3d and 2d array into 1d array
// let arr = [5,6,2];
// let sum = arr.reduce((accumulator, currElement, index, arr) => {
//     return accumulator += currElement;
// })
// console.log(sum);


// convert 2d to 1d array
// const arr = [[1,2],[3,4],[5,6],[7,8,9]];
// let flatArr = arr.reduce((accum,currVal) => {
//     return accum.concat(currVal);
// })
// console.log(flatArr);


// 11

// Strings

// let myName = "Zohaib Ali Thaheem";
// console.log(myName.length);

// Escape Character
// let anySentence = "Be a dreamer \"and\" do it";
// console.log(anySentence);

// let anySentence = "If I had one hour to chop down a tree, I'D take \"45\" min to sharpening my axe";
// console.log(anySentence);


// Finding a String in a String
// const myBioData = "I am the Zohaib Ali Thaheem";
// console.log(myBioData.indexOf("Zohaib"));

// const myBioData = "I am the Zohaib Ali Thaheem";
// console.log(myBioData.lastIndexOf("Zohaib"));


// Searching for a String in a String
// let myBioData = "I am Zohaib Ali Thaheem";
// let sData = myBioData.search("Zohaib");
// console.log(sData);


// slice() 
// var str = "Apple, Banana, Orange";
// // let res = str.slice(0,15);
// let res =  str.slice(7,-2); // It will remove last elements last to two letters
// console.log(res);


//  Challange
// Display only at some limit

// let mmyTweet = "sdfajksbfjcmnxmczMcbMNcbmZbcmNBcmZBmcnbzmcbaskjdhasiusduaihcxzjcxjkBJCbLbczbcmnZ<BcnnzcnmbcNbzxmnjhasdjdgjdashkjdhkjdhkjdshfkhfkaaksbfkjasbfkjajnsfkjasjkfbjskafbjskbfsajbfsjabjfksbjkfdaskjddfbkjasbfkahfsdfjkafbjkabfkjabsfkjasjkrhwwiuehfdksfksdkfwehfiwhfhkfkajsdjdbmnnasbdcbasksjfkafkfhkjanfnkcnkjfhhjskdhffjkdshflsyrroieoafnacnncccahlfhldhfhkadhdifyrewprjnannqap";

// let myActualTweet = mmyTweet.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


// substring() is similar to Slice() but it can't take a -negative numbber 
// var str = "Apple, Banana, Orange";
// let res = str.substring(0,15);
// let res =  str.substring(7,-2); // It will remove last elements last to two letters
// console.log(res);


// substr() 
// var str = "Apple, Banana, Orange";
// // let res = str.substr(0,15);
// let res =  str.substr(7,-2);
// // let res =  str.substr(-4); 
// console.log(res);


// replace()
// let str = "I am zohaib Ali  Thaheem";
// let rep = str.replace("zohaib","Zohaib");
// console.log(rep);



// Extracting String 

// charAt()
// let str = "HELLO WORLD";
// console.log(str.charAt(0));

// // charCodeAt()
// console.log(str.charCodeAt(0));

// // challange
// let lastChar = str.length-1;
// console.log(str.charCodeAt(lastChar))

// // property access []
// console.log(str[0]);


// some other useful methods
// let myName = "Zohaib Ali Thaheem";
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());

// concat() 
// let fName = "Zohaib";
// let mName = "Ali";
// console.log(fName.concat(" ",mName));

// trim()
// let lName = "            Thaheem";
// console.log(lName);
// console.log(lName.trim());


// convert String to Array
// var txt = "a,b,c,d,e";
// console.log(txt.split(","));
// console.log(txt.split(" "));
// console.log(txt.split("|"));



// 12

// Date and Time
// 4 ways

// new Date();

// let currDate = new Date();
// console.log(currDate);
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// console.log(Date.now());


// new Date(year,month,day,hours,minutes,seconds,milliseconds) // 7 arguments
// var d = new Date(2023,1,12,19,48,10,0);
// var d = new Date(2020,0);
// console.log(d.toLocaleString());


// new Date(milliseconds);

 // var d = new Date("February 12, 2023 07:55:30");
// console.log(d.toLocaleString());


// new Date(date String);

// var d = new Date(1676213884093*2);
// console.log(d.toLocaleString())


// Date Methods

// const d = new Date();
// console.log(d.toLocaleString());
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getDate());

// const d = new Date();
// console.log(d.setFullYear(2023));
// console.log(d.setMonth(2));
// console.log(d.setDate(23));


// Time Methods

// const t = new Date();
// console.log(t.getTime());
// console.log(t.getHours());
// console.log(t.getMinutes());
// console.log(t.getSeconds());
// console.log(t.getMilliseconds());

// const t = new Date();
// console.log(t.setTime());
// console.log(t.setHours(5));
// console.log(t.setMinutes(5));
// console.log(t.setSeconds(5));
// console.log(t.setMilliseconds(5));



// 13

// Math Objects

// console.log(Math.PI);

// // Math.round()
// let num = 23.5677;
// console.log(Math.round(num));

// // Math.pow()
// console.log(Math.pow(2,3));

// // Math.sqrt()
// console.log(Math.sqrt(25));

// // Math.abs()
// console.log(Math.abs(-56));

// // Math.ceil()
// console.log(Math.ceil(4.51))
// console.log(Math.round(4.51))
// console.log(Math.ceil(99.1));
// console.log(Math.round(99.1));

// // Math.floor()
// console.log(Math.floor(4.51));
// console.log(Math.floor(99.1));

// Math.min()
// console.log(Math.min(2,3,4,5,6,9,-10));

// // Math.max()
// console.log(Math.max(2,3,4,5,6,9,-10));

// Math.random()
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));

// Math.trunc()
// console.log(Math.trunc(4.6));




// 14

// DOM & BOM


// 15

// Events

// 16

// Timing Based Event
// setTimeout()
// setTimeout(function,milliseconds)

// setInterval()
// setInterval(function,milliseconds)

// clearInterval()


// 17

// Object Oriented JavaScript

// Object literal:- a key value pair data structure
// Storing variables and functions together
// Object = Scchool Bag
// create Object

// 1st way
// let BioData = "zohaib";
// console.log(BioData);

// let bioData = {
//     myName : "Zohaib Ali Thaheem",
//     myAge : 21,
//     getData : function() {
//         console.log(`My Name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName);
// console.log(bioData.myAge);
// console.log(bioData.getData());
// bioData.getData();

// 2nd way
// let bioData = {
//     myName : "Zohaib Ali Thaheem",
//     myAge : 21,
//     getData () {
//         console.log(`My Name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// bioData.getData();

// what if we want object as a value inside an object
// let bioData = {
//     muName : {
//         firstName : "Zohaib",
//         lastName : "Thaheem"
//     },
//     myAge : 21,
//     getData() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.muName.lastName);

// what is this object
// this object contain the current context

// console.log(this);
// let myName = "Zohaib";
// function myName() {
//     console.log(this.myName);
// }
// myName();


// 18
// Destrcuturing

// Array Destructuring
// const myBioData = ["Zohaib","Thaheem",21];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let mAge = myBioData[2];

// console.log(mAge);

// let [myFName, myLastName, mAge, myDegree = "Undergraduate"] = myBioData;
// console.log(myDegree);

// object Destructuring
// const myBioData = {
//     myFName : "Zohaib",
//     myLName : "Thaheem",
//     myAge : 21
// }
// let age = myBioData.myAge;
// console.log(age);

// let {myFName, myLName, mAge} = myBioData;
// console.log(myFName);


// 19

// Object Properties
// let myName = "Zohaib";
// const myBio = {
//     [myName] : "Hello how are you?",
//     [20+1] : "is my age"
// }
// console.log(myBio);

// if key and value are same no need to write both
// let myName = "Zohaib";
// let myAge = 21;
// let BioData = {
//     myName,
//     myAge,
// }
// console.log(BioData);


// Spread Operator

// const colors = ["red","green","blue","white"];

// const mycolors = ["red","green","blue","white","yellow","black"];

// // const myFavColors = ["yellow","black", ...colors];

// const myFavColors = [...colors, "yellow","black"];

// console.log(myFavColors);



// 20

// ES7 features
// 1: array include
// const colors = ["red","green","blue","white","pink"];
// const isPresent = colors.includes("red");
// console.log(isPresent);

// Exponentiation operator
// 2: **
// console.log(2**2);
// console.log(2**3);


// 21

// ES8
// String padding
// Object.values()
// Object.entries()

// const message = "Zohaib Ali Thaheem is my name";
// console.log(message);
// console.log(message.padStart(30));
// console.log(message.padEnd(30));

// const person = {name : "Zohaib", age : 21};
// console.log(Object.values(person));
// console.log(Object.entries(person));



// ES2018
// const person = {name : "Zohaib", age : 21, degree : "Undergraduate"};
// const sPerson = {...person};

// console.log(person);
// console.log(sPerson);



// 22 

// Advance JavaScript

// Event Propagation :- mode determines in which order the elements recieve the event.
// Event Bubbling
// Event Capturing

// callback function
// 
const add = (a,b) => {
    return a+b;
}
const subs = (a,b) => {
    return a-b;
}

const calculator = (num1,num2,operator) => {
    return operator(num1,num2);
}
// higher order function
calculator(5,2,add)
console.log(calculator(5,2,add));