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

let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
  if (!empleadoDB) {
    callback(`No existe un empleado con el ID ${id}`);
  } else {
    callback(null, empleadoDB);
  }
  return empleadoDB;
};

let callbackEmpleado = (err, object) => {
  if (!!err) {
    return console.log(err);
  }
  console.log(object);
};

let getSalario = (empleado, callback) => {
  if (!empleado) {
    callback('El empleado no fue encontrado');
  } else {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
      callback(`No existe un salario para el empleado ${empleado.nombre}`);
    } else {
      callback(null, { nombre: empleado.nombre, salario: salarioDB.salario});
    }
  }
};

getSalario(getEmpleado(3, callbackEmpleado), (err, object) => {
  if (err) {
    return console.log(err);
  }
  console.log(object);
});