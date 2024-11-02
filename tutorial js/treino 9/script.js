// import { Multiplicar, Somar} from "./modules/funcoes.js";
// import { Multiplicar as m, Somar as s } from "./modules/funcoes.js";
import * as Funcoes from "./modules/funcoes.js"
import * as Pessoa from "./modules/pessoa.js"

//testando instanciamento
const funcao = Funcoes;

let n1 = 10;
let n2 = 5;

let resultadoMultiplicacao = funcao.multiplicar(n1, n2);
let resultadoSoma = Funcoes.somar(n1, n2);
// let resultadoMultiplicacao = m(n1, n2);
// let resultadoSoma = s(n1, n2);
// let resultadoMultiplicacao = Multiplicar(n1, n2);
// let resultadoSoma = Somar(n1, n2);

document.getElementById('demo').innerHTML = `${n1} x ${n2} = ${resultadoMultiplicacao} `;
document.getElementById('demo').innerHTML += Pessoa.nome;
document.getElementById('demo2').innerHTML = `${n1} + ${n2} = ${resultadoSoma} `;
document.getElementById('demo2').innerHTML += Pessoa.idade;