const request = require(`request`);


const forecast = (lat, lng, callback) => {

    const url = `https://api.darksky.net/forecast/a24a531f7bf9dfb6250eaabab3cb2476/${lat},${lng}`;

    request({ url, json: true }, (error, { body }) => {

        if(error){
            callback(`Error fetching data`, undefined)
        }else if(body.error){
            callback(body.error, undefined)
        }else{
            const data = body;
            const temp = data.currently.temperature;
            const precip = data.currently.precipProbability;
            callback(undefined, `It is currently ${temp} degrees out. There is a ${precip * 100}% chance of rain.`);
        }
        
    })

}



module.exports = forecast;