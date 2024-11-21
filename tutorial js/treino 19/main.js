import * as mds from "./modules/script.js"

document.querySelector('#botao').addEventListener('click', getTime)

function getTime(){
    document.querySelector('#demo').innerHTML = Date();
}