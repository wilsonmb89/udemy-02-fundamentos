/**
 * Async - Await
 */

let getNombre = 
  () => {
    return new Promise(
      (resolve, reject) => {
        try {
          setTimeout(() => {
            resolve('Wilson');
          }, 3000);
        } catch (err) {
          reject(err);
        }
      }
    );
  }

let saludo = async () => {
  let nombre = await getNombre();
  return `Hola ${nombre}`;
};

saludo().then(
  res => {
    console.log(res);
  }
);