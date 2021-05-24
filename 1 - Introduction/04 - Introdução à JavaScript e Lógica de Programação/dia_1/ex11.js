let salarioBruto, inss, ir;


if (salarioBruto <= 0) {
  console.log('ERRO - Salário bruto não pode ser menor ou igual a zero.');
  if (salarioBruto < 1556.94) {
    inss = salarioBruto * 0.08;
  } else if (salarioBruto < 2594.93) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto < 5189.83) {
    inss = salarioBruto * 0.11;
  } else {
    inss = 570.88;
  }
  
  let salarioBase = salarioBruto - inss;

  if (salarioBase < 1903.98) {
    ir = 0;
  } else if (salarioBase < 2826.66) {
    ir = ((7.5 * salarioBase) / 100) - 142.80;
  } else if (salarioBase < 3751.06) {
    ir = ((15 * salarioBase) /100) - 354.80;
  } else if (salarioBase < 4664.69) {
    ir = ((22.5 * salarioBase) / 100) - 636.13;
  } else {
    ir = ((27.5 * salarioBase) / 100) - 869.36;
  }

  let salarioLiquido = salarioBase - ir;
  console.log('O salário líquido de', salarioBruto, 'é', salarioLiquido, '.');
  

} 