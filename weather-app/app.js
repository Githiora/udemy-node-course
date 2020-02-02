const geocode = require(`./utils/geocode`);
const forecast = require(`./utils/forecast`)


geocode(`Boston`, (error, response) => {
    if(error){
        return console.error(error);
    }
    forecast(response.latitude, response.longitude, (error, data) => {
        console.log(response.location);
        console.log(data);
    })
})





