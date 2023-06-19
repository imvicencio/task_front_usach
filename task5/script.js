const arrayNumbers = [6, 8, 9, 2, 5, 10];

function sumarElementos(array) {
  return array.reduce((total, valor) => {
    return total + valor;
  });
}

function CalcularPromedio(array, callback) {
  return callback(array) / array.length;
}

console.log(CalcularPromedio(arrayNumbers, sumarElementos));
