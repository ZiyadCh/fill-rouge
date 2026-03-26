let numbers = [];

for (let index = 0; index < 10; index++) {
  numbers[index] = Math.floor(Math.random() * 10) + 1;
}

for (let index = 0; index < 10; index++) {
  console.log(numbers[index]);
}
