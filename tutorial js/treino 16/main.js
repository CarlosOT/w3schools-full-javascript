import * as mds from "./modules/script.js"

let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

mds.setBodyTag('demo', `<h2>${header}</h2>`);

let itemList = '';
for(let i in tags){
    itemList += `<li>${tags[i]}</li>`;
}

mds.setBodyTag('demo', `<ol>${itemList}</ol>`);