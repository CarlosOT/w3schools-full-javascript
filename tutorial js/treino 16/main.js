import * as mds from "./modules/script.js"

let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for(const x of tags){
    html+= `<li>${x}</li>`;
}
html += `</ul>`;
mds.htmlWrite('demo', html);