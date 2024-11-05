import * as mds from "./modules/script.js"

// const age = Number(20);

/*
if(age < 18){
    mds.htmlWrite('demo', 'Muito novo para comprar alcool');
}else{
    mds.htmlWrite('demo', 'Pode comprar alcool');
}
*/

//este é o operador ternário
// let liberado = (age < 18) ? mds.htmlWrite('demo', "Muito Novo Para Comprar Alcool") : mds.htmlWrite('demo', "Pode Comprar Alcool");

// let myNumber =2;
// while(myNumber != Infinity){
//     window.alert(myNumber *= myNumber);
// }


// let x = Number.MAX_SAFE_INTEGER;

let x = 20;
let y = 20.6;

mds.htmlWrite('demo', Number.isInteger(x));
mds.htmlWrite('demo', Number.isInteger(y));
