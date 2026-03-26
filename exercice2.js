let a = [2, 3, 4, 1, 7, 6, 8];
let max = 0;
let min = a[0];

for (let index = 0; index < a.length; index++) {
  if (a[index] > max) {
    max = a[index];
  }
  if (a[index] < min) {
    min = a[index];
  }
}

console.log("max" + max);
console.log("min" + min);
