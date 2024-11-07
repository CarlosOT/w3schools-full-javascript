// let frutas = ['laranja', 'morango', 'tomate', 'abacaxi'];

// for(const x of frutas){
//     console.log(x);
// }
// console.log("");

// const cars = [];
// cars[0] = "Saab";
// cars[2] = "Gol";
// cars.push('RAM');
// cars[1] = 'Opala';
// cars[0] = 'Opel';

// for(const x of cars){
//     console.log(x);
// }
// console.log("");

// const myArray = [];

// myArray[0] = Date.now;
// myArray[1] = function myFunction(){};
// myArray[2] = [1,2,3];
// console.log(myArray.length);

const fruits = ['banana','Orange', 'Apple'];
let fLen = fruits.length;
let text = '';

// for(let i = 0; i < fLen; i++){
//     text += fruits[i];
//     console.log(text);
// }

function myFunction(value){
    text += value;
    console.log(text);
}
fruits.forEach(myFunction);
