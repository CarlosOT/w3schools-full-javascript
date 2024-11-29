// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits.set("Kiwi", 100);
fruits.set("Kiwi", 150);

console.log(fruits instanceof Map);
console.log(fruits.get("bananas"));
console.log(typeof fruits);
console.log(fruits);