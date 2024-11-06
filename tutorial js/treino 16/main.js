import * as mds from "./modules/script.js"

let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

mds.setTagHtml('demo', `<h2>${header}</h2>`);
mds.setTagHtml('demo', `<ol><li>${tags[0]}</li></ol>`)