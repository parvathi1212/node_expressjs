// Include request Module
let nd = require("needle");

exports.getWeatherInfo=function(location,callbackfunc){
    
     var url = "http://api.weatherstack.com/current?access_key=3be6dd34666aa3af78d6f3f144bc12a8&query="+location;
        nd.get(url,(err,response,body)=>{
                if(err)
                   callbackfunc(err,null);
                else{
                    callbackfunc(null,body.current.temperature);
                }
});
/* Call request function by sending url
 		Implement following steps in the callback request function:
 			Step 1: if error occurred, then call callbackfunc by sending arguments error and null.
 			Step 2 : otherwise call callbackfunc with null and response.body.current.temperature.
*/


 }
//After request function, Store getWeatherInfo function into module.exports.getWeatherInfo


