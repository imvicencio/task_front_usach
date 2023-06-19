function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function getFibonacci(n, callback) {
  for (let i = 0; i < n; i++) {
    if (callback(i) === 0) {
      break;
    }
  }
}

// Calculo de fibonacci con valores 0 - 1000
console.log("Calculo de fibonacci con valores 0 - 1000");

getFibonacci(1000, (i) => {
  let valor = fibonacci(i);
  if (valor > 1000) {
    return 0;
  } else {
    console.log(valor);
    return 1;
  }
});

// Calculo de fibonacci con valores pares
console.log("Calculo de fibonacci con valores 0 - 1000 pares");

getFibonacci(1000, (i) => {
  let valor = fibonacci(i);
  if (valor > 1000) {
    return 0;
  } else if (valor % 2 === 0 && valor > 0) {
    console.log(valor);
    return 1;
  }
});

// Calculo de fibonacci con valores impares
console.log("Calculo de fibonacci con valores 0 - 1000 impares");

getFibonacci(1000, (i) => {
  let valor = fibonacci(i);
  if (valor > 1000) {
    return 0;
  } else if (valor % 2 !== 0 && valor > 0) {
    console.log(valor);
    return 1;
  }
});
