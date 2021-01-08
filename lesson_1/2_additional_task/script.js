'use strict';
let num = `33721`,
    sum = 1;

for (let i = 0; i < num.length; i++) {
    sum *= +num[i];
}

console.log(sum);
alert(sum ** 3);
