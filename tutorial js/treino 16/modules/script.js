/**
 * getElementById(**idElement**).innerHTML = **conteudo**
 * @param {string} idElement
 * @param {*} value
*/
export function htmlWrite(idElement, conteudo){
    document.getElementById(idElement).innerHTML = conteudo;
}

/**
 * getElementById(**idElement**).innerHTML = **value**
 * @param {string} idElement 
 * @param {string} nameTag 
 */
export function setTagHtml(idElement, value){
    document.getElementById(idElement).innerHTML = `${value}`;
}