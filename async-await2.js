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

let getEmpleado =
  async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!!empleadoDB) {
      return empleadoDB;
    } else {
     throw(`No existe el empleado con el ID ${id}`);
    }
};

let getSalario = 
  async (empleado) => {
    if (!!empleado) {
      const salarioDB = salarios.find(salario => salario.id === empleado.id);
      if (!!salarioDB) {
        return salarioDB;
      } else {
        throw(`No existe salario para el empleado ${empleado.nombre}`);
      }
    }
};

let datosEmpleado = async (id) => {
  const empleado = await getEmpleado(id).catch(err => console.log(err));
  if (!!empleado) {
    console.log(`El empleado es ${empleado.nombre}`);
    const salario = await getSalario(empleado).catch(err => console.log(err));
    if (!!salario) {
      console.log(`Su salario es ${salario.salario}`);
    }
  }
};

datosEmpleado(4);