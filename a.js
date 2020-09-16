// let a 
// function getValueA (cb){
//     setTimeout(() => {
//         a = 10
//         cb(a)
//     },2000)
// }
// getValueA(value => console.log(value))

const request = require('request');


// function getTempCity(cityName , cb){
//   const url = `htt://api.openweathermap.org/data/2.5/weather?appid=86183a23377ed034aef7aad102f43d64&units=metric&q=${cityName}`;
//   request(url,{json : true} , function (error, response, body) {
//     if(error) return cb(error);
//     if(body.cod === "404") return cb(body.message)
//     return cb(null , body.main.temp)
//   });
// }
// getTempCity("vietnam" , (error , temp) =>{
//     console.log(error || temp)
// })

function cong(a , b , cb){
  const url = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`;
  request(url,{json : true} , function (error, response, body) {
    if(error) return cb(error);
    if(!body.success) return cb(body.message)
    return cb(null , body.message)
  });
}
function nhan(a , b , cb){
  const url = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`;
  request(url,{json : true} , function (error, response, body) {
    if(error) return cb(error);
    if(!body.success) return cb(body.message)
    return cb(null , body.message)
  });
}
function chia(a , b , cb){
  const url = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`;
  request(url,{json : true} , function (error, response, body) {
    if(error) return cb(error);
    if(!body.success) return cb(body.message)
    return cb(null , body.message)
  });
}
function tru(a , b , cb){
  const url = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`;
  request(url,{json : true} , function (error, response, body) {
    if(error) return cb(error);
    if(!body.success) return cb(body.message)
    return cb(null , body.message)
  });
}

// 5 + 6 - 7 * 2
cong(5 , 6 , (error , tong) => {
  if(error) return console.log("Lỗi của phép cộng " + error)
  tru(tong , "a" , (error , hieu) => {
    if(error) return console.log("Lỗi của phép trừ " +error)
    nhan(hieu , 2 , (error , hieu)  => {
      if(error) return console.log("Lỗi của phép nhân " + error)
      console.log(hieu)
    })
  })
})

