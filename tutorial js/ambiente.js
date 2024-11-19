const semester1 = ["January", "February", "March", "April", "May", "June"];
const semester2 = ["July", "August", "September", "October", "November", "December"];
const wholeYear = [...semester1, ...semester2];


const d = new Date();
let month = wholeYear.at(d.getMonth());

console.log(month);