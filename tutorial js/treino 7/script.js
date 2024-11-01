function multiplicar(n1, n2){
    return n1*n2;
}

let x1 = 10;
let x2 = 5;
let resultado = multiplicar(x1,x2);
document.getElementById('demo').innerHTML = `${x1} * ${x2} = ${resultado}`;