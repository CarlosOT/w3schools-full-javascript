/**
 * getElementById(**idElement**).innerHTML = **conteudo**
 * @param {string} idElement
 * @param {*} value
*/
export function htmlWrite(idElement, conteudo){
    document.getElementById(idElement).innerHTML = conteudo;
}