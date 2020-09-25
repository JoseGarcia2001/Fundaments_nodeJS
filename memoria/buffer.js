let buffer = Buffer.alloc(5)
let bufferLlenos = Buffer.from([1,2,3,4])
let bufferHola = Buffer.from('Holi')

console.log(buffer);
console.log(bufferLlenos);
console.log(bufferHola);

let abc = Buffer.alloc(26);

for (let i = 0; i < abc.length; i++) {
  abc[i] = i + 97;
}

console.log(abc.toString());