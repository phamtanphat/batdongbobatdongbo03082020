// let a 
// function getValueA (cb){
//     setTimeout(() => {
//         a = 10
//         cb(a)
//     },2000)
// }
// getValueA(value => console.log(value))

const request = require('request');
const url = 'http://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=Hanoi';
request(url, function (error, response, body) {
  console.log('body:', body); // Print the HTML for the Google homepage.
});


getTempCity("vietnam" , (error , temp) =>{
    console.log(error || temp)
})

