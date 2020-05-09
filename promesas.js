let empleados = [
  {
    id: 1,
    nombre: 'Wilson'
  },
  {
    id: 2,
    nombre: 'Ramon'
  },
  {
    id: 3,
    nombre: 'Gloria'
  }
];

let salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  }
];

let getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!!empleadoDB) {
      resolve(empleadoDB);
    } else {
      reject(`No existe el empleado con el ID ${id}`);
    }
  });
};

let getSalario = (empleado) => {
  return new Promise((resolve, reject) => {
    if (!!empleado) {
      const salarioDB = salarios.find(salario => salario.id === empleado.id);
      if (!!salarioDB) {
        resolve(salarioDB);
      } else {
        reject(`No existe salario para el empleado ${empleado.nombre}`);
      }
    }
  });
};

/* getEmpleado(2)
  .then(
    empleadoDB => {
      console.log(`El empleado es ${empleadoDB.nombre}`);
      getSalario(empleadoDB)
        .then(
          salarioDB => {
            console.log(`Su salario es de ${salarioDB.salario}`);
          }
        )
        .catch( err => console.log(err) );
    } 
  )
  .catch( err => console.log(err) ); */

(getEmpleado(2)
  .then(
    empleadoDB => {
      console.log(`El empleado es ${empleadoDB.nombre}`);
      return getSalario(empleadoDB);
    }
  )
  .catch(err => console.log(err))
).then(
  salarioDB => {
    console.log(`Su salario es de ${salarioDB.salario}`);
  }
).catch(err => console.log(err));

console.log('Holi');