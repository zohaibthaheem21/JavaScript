// var array = [1,2,3,4,5,6,7,8,9];

// let newArr = array.map((element,index,arr) => {
//     return `index no = ${index} and element is ${element} from the array is ${arr}`
// });

// // console.log(array);
// console.log(newArr);

// Challange
// let arr = [1,4,9,16,25,36];
// let arrSqr = arr.map((element) => {
//     return Math.sqrt(element);
// });

// console.log(arrSqr);


// multiply by 2 and return onlooy those which is greater than 10
let arr = [1,2,3,4,5,6,7,8];
let newArr = arr.map((element) => {
    return element*2;
}).filter((element) => {
    return element > 10;
});

console.log(newArr);