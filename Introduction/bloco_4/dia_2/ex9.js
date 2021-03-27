let arrayGenerico = [];

for (let index = 0; index < 25; index += 1){
  arrayGenerico[index] = index + 1;
}

for (let division of arrayGenerico) {
  division /= 2;
  console.log(division);
}
