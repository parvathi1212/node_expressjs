var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/bhimavaram.json?access_token=pk.eyJ1Ijoia2FybmF0YWthcHVwYXJ2YXRoaSIsImEiOiJjbDNvMHM5M2cwaWZoM3BwbG1nbnZwdWpnIn0.bNODyQY8siQMLegZLNEgPw";
let nd = require("needle");
nd.get(url,(err,response,body)=>{
    if(err)
       console.log(err);
    else
       console.log(JSON.parse(body));
});