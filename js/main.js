let num = 266219;
let str = String(num);

let product = 1;
for(let i=0; i<str.length; i++) {
    product*=str[i];
}
console.log(product);

let power = String(product ** 3);
console.log(power.substring(0,2));


