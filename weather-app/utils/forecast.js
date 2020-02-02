const request = require(`request`);


const forecast = (lat, lng, callback) => {

    const url = `https://api.darksky.net/forecast/a24a531f7bf9dfb6250eaabab3cb2476/${lat},${lng}`;

    request({ url: url, json: true }, (error, response) => {

        if(error){
            callback(`Error fetching data`, undefined)
        }else if(response.body.error){
            callback(response.body.error, undefined)
        }else{
            const data = response.body;
            const temp = data.currently.temperature;
            const precip = data.currently.precipProbability;
            callback(undefined, `It is currently ${temp} degrees out. There is a ${precip * 100}% chance of rain.`);
        }
        
    })

}



module.exports = forecast;