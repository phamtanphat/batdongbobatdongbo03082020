// let a 
// function getValueA (cb){
//     setTimeout(() => {
//         a = 10
//         cb(a)
//     },2000)
// }
// getValueA(value => console.log(value))

const request = require('request');


function getTempCity(cityName , cb){
  const url = `htt://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`;
  request(url,{json : true} , function (error, response, body) {
    if(error) return cb(error);
    if(body.cod === "404") return cb(body.message)
    return cb(null , body.main.temp)
  });
}
getTempCity("vietnam" , (error , temp) =>{
    console.log(error || temp)
})

