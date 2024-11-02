import { nome, idade } from "./modules/person.js";

let texto = `Meu nome é ${nome} e eu tenho ${idade} anos`;
document.getElementById('demo').innerHTML = texto;