// Arrays
let ninjas = ['max', 'ryu', 'chun-li'];

console.log(ninjas);
console.log(ninjas[1]);

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['max', 'belle', 30, 20];
console.log(random);

console.log(ninjas.length);

// array methods
let result = ninjas.join(',');
console.log(result);

result = ninjas.join(' : ');
console.log(result);

result = ninjas.indexOf('chun-li')    ;
console.log(result);

result = ninjas.concat(['ken', 'belle']);
console.log(result);

result = ninjas.push('ken'); // destructive method
console.log(result);
console.log(ninjas);

result = ninjas.pop('ken'); // destructive method
console.log(result);
console.log(ninjas);



