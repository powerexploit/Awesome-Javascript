const ages = [17, 32, 43, 16, 18, 14, 19, 20, 30];

let isOlderThan17 = [];

for (let index = 0; index < ages.length; index++) {
  if (ages[index] > 17) {
    isOlderThan17.push(ages[index]);
  }
}

let isOlderThan18 =  ages.filter(age => age > 18)

console.log(isOlderThan17.sort());
console.log(isOlderThan18.sort());
