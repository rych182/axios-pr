// https://bored-api.appbrewery.com/ Y  https://axios-http.com/es/docs/example

/*      MI MANERA
const axiosRequest = require('axios')

axiosRequest.get('https://bored-api.appbrewery.com/random')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(`Yo podría ${response.data.activity}`);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    console.log("algo ejecutandose al final")
  });

La palabra AWAIT, lo que hace es que "nos permite esperar a que la promesa se haya completado antes de pasar
a la siguiente linea", esto hace que nuestro código sea "más ordenado y fácil de leer"

await se usa dentro de funciones "marcadas" con la palabra "async" 
*/

/* Ejercicio 1

const axiosRequest = require('axios')
axiosRequest
    .get('https://bored-api.appbrewery.com/random')
    .then(response =>{
        console.log(`You could ${response.data.activity}`)
    }).catch( (error)=>{
      console.error(`este es un ${error}`)
    })
    console.log("hola mundo")

    */

    
/* Este es un ejercicio donde se consume con una función asyncrona pero no podemos generar un error
Porque no usamos try-catch
const axiosRequest = require('axios')

async function getActivity() {
  let response = await axiosRequest.get('https://bored-api.appbrewery.com/random')
  console.log(`You could ${response.data.activity}`)//esta linea no se ejecuta hasta que se ejecute el await
}
getActivity()
*/

const axiosRequest = require('axios')
async function getActivity() {
  try {
    let response = await axiosRequest.get('https://bored-api.appbrewery.com/random')
    console.log(`Esto es ${response.data.activity}`)
  } catch (error) {
    console.log(`Este es un error ${error}`)
  }
}
getActivity()