sumar = (a, b) => (a + b);
restar = (a, b) => (a - b);
multiplicar = (a, b) => (a * b);
dividir = (a, b) => (a / b);

operar = (a, b, operacion) => {
  return operacion(a, b);
};

console.log('El resultado de la suma', operar(1, 6, sumar));
console.log('El resultado de la resta', operar(1, 6, restar));
console.log('El resultado de la multiplicacion', operar(1, 6, multiplicar));
console.log('El resultado de la division', operar(1, 6, dividir));

console.log('Calculadora test');
