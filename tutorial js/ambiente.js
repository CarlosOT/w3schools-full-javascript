const letters = new Set(['a','b','c']);
letters.add('d');

console.log(typeof letters);
console.log(letters.size);
console.log(letters.values());
console.log(letters.keys());
console.log(letters);

let text = '';
for (const x of letters){
  text += x + ' ';
}

console.log(text);