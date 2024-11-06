import * as mds from "./modules/script.js"

// let texto = "Carlos \"Juninho\"";
// let letter = texto[0];

// mds.htmlWrite('demo', texto.length);
// mds.htmlWrite('demo', texto.charAt(0));
// mds.htmlWrite('demo', texto.at(1));
// mds.htmlWrite('demo', letter);


// let text = "Apple, Banana, ";
// let text2 = "Kiwy, ";
// let text3 = "Orange";
// let joinText = text.concat(text2, text3);
// let part = text.slice(7, 13);
// let part = text.slice(-7);
// let part2 = text.substring(7, 13);
// let part = text.substr(7, 6);
// mds.htmlWrite('demo', joinText);
// mds.htmlWrite('demo2', part2);


// let text = "5";
// let padded = text.padStart(5, "ERTY");
// mds.htmlWrite('demo', padded);

let text = "Vou visitar a casa da JOANA da JOANA da JOANA";
let newText = text.replace(/da joana/ig, " do Marcos");
mds.htmlWrite('demo', newText.split(""));
