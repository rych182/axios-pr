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
*/

const axiosRequest = require('axios')
axiosRequest
    .get('https://bored-api.appbrewery.com/random')
    .then(response =>{
        console.log(`You could ${response.data.activity}`)
    })