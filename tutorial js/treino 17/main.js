import * as mds from "./modules/script.js"

// const frutas = ['banana', 'laranja', 'abacate'];
// mds.htmlWrite('demo', frutas.toString());
// mds.htmlWrite('demo', frutas);
// mds.htmlWrite('demo', frutas[0]);

// const person = {firstame: "Ingrid", age: 27};
// mds.htmlWrite('demo', person.age);


let x = "";
// objetoPai
const myObj = { 
    name: "Carlos",
    age: 28,
    // objetoPai > arrayFilho
    cars:[
        //objetoPai > arrayFilho > objetoFilho > arrayFilho
        {name: "ford", models:["fiesta", "focus", "mustang"]},
        {name: "bmw", models:["320","x3","x5"]},
        {name: "fiat", models:['500', 'panda']},
    ]
}

// mds.htmlWrite('demo', `meu nome é ${myObj.name}, minha idade é ${myObj.age} 
//     e eu tenho um carro ${myObj.cars[0].name} modelo ${myObj.cars[0].models[0]}`);


for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
    }
}

document.getElementById('demo').innerHTML = x;