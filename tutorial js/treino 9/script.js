import { Multiplicar, Somar } from "./modules/funcoes.js";

let n1 = 10;
let n2 = 5;

let resultadoMultiplicacao = Multiplicar(n1, n2);
let resultadoSoma = Somar(n1, n2);

document.getElementById('demo').innerHTML = resultadoMultiplicacao;
document.getElementById('demo2').innerHTML = resultadoSoma;