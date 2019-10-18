//array

const superHeros=['Iron man','Spiderman','Capt.America']
console.log(superHeros);
console.log(superHeros[0]);
console.log(superHeros.length);
superHeros.push("thor");
console.log(superHeros);
superHeros.pop()
superHeros.unshift('a')
console.log(superHeros);
superHeros.shift()
console.log(superHeros);
superHeros.concat([12,5])
console.log(superHeros);
console.log(superHeros[superHeros.length -1]);

console.log(`we have ${2+1} super heros`);
console.log(`we have ${superHeros.length} super heros`);
console.log(`we have ${superHeros[superHeros.length -1]} super heros`);