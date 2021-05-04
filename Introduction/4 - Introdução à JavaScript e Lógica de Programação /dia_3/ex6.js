let n = 7;
let ePrimo = true;

if (n < 1) console.log('Favor escolher numeros maiores que 1');
else {
  for (let index = 2; index < n; index += 1){
    if (n % index === 0) {
      ePrimo = false;
      break;
    }
  }

  if (ePrimo === true) console.log('o numero ' + n + ' é primo');
  else console.log('o numero ' + n + ' não é primo');
}
