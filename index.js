const numbers = [1, 5, 3, 7, 5];

const hasEvenNumber = numbers.some((num) => num % 2 === 0);
// console.log(hasEvenNumber);

//  part2
const currentRoles = ["user", "editor"];
const featureAccess = ["admin", "manager", "user"];

const canAccess = currentRoles.some((role) => featureAccess.includes(role));
// console.log(canAccess);

// part3
const arr = Array.from({ length: 5 }, (_, i) => i * i);
console.log(arr);
