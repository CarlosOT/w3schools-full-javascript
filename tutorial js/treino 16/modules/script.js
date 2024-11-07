/**
 * getElementById(**idElement**).innerHTML = **conteudo**
 * @param {string} idElement
 * @param {*} value
*/
export function htmlWrite(idElement, conteudo){
    document.getElementById(idElement).innerHTML = conteudo;
}

/**
 * getElementById(**idElement**).innerHTML = **nameTag**
 * @param {string} idElement 
 * @param {string} nameTag 
 */
export function setBodyTag(idElement, nameTag){
    let v = nameTag;
    document.getElementById(idElement).innerHTML += nameTag;
}