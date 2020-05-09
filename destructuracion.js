const persona = {
  nombre: 'Wilson',
  apellido: 'Martnez',
  edad: '30',
  sexo: 'M',
  nacionalidad: 'Colombiano'
};

let { nombre: primerNombre, edad, nacionalidad } = persona;

console.log(primerNombre, edad, nacionalidad);