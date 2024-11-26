const cars = ["ford", "chevette"];
let i = 0;
let len = cars.length;
let text = "";
for (; i < len; ) {
  text += cars[i] + " ";
  i++;
  console.log(text);
}
