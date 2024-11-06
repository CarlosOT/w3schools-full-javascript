import * as mds from "./modules/script.js"

// let text = "Meu nome é Carlos Teixeira";
// let index = text.indexOf("Carlos");
// let firtsName = text.slice(index, 17);

// let demoText = text.search(/carlos/i);

let text = "The rain in SPAIN stays mainly in the plain";
// let demoText = text.includes("SPAIN", 15);
let demoText = text.startsWith("SPAIN", 12);

// let demoText = text.match(/ain/gi);
// mds.htmlWrite('demo', demoText.length);
// mds.htmlWrite('demo', demoText[0]);
// mds.htmlWrite('demo', demoText[1]);
// mds.htmlWrite('demo', demoText[2]);
// mds.htmlWrite('demo', demoText[3]);

mds.htmlWrite('demo', demoText);