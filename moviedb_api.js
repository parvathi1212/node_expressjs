// var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=b2a70ec8717bb23c779a41df0ff84555&language=en-US&page=1";
// let nd = require("needle");
// nd.get(url,(err,response,body)=>{
//     if(err)
//        console.log(err);
//     else 
//        var results = body.results;
//        for (ele in results)
//        console.log(results[ele]['title']);
// }); 


// let nd = require("needle");
// for(var i = 1;i < 449;i++){
//    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=b2a70ec8717bb23c779a41df0ff84555&language=en-US&page="+i;
//    nd.get(url,(err,response,body)=>{
//       if(err)
//       console.log(err);
//       else 
//       var results = body.results;
//       for (ele in results)
//       console.log(results[ele]['original_language']);
   
//    });
// };


let nd = require("needle");
for(var i = 1;i < 449;i++){
   var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=b2a70ec8717bb23c779a41df0ff84555&language=en-US&page="+i;
   nd.get(url,(err,response,body)=>{
      if(err)
      console.log(err);
      else 
      var results = body.results;
      for (ele in results){
         if(results[ele].original_language == 'te'){
            console.log(results[ele]['title']);
         }
      }
   });
};