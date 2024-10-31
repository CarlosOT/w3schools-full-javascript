function mudarTitulo(){
    document.getElementById('titulo').innerHTML = document.getElementById('txtInput').value;
}

function imprimirTela(){
    document.getElementById('botaoImprimir').style.display = "none";
    window.print();
}