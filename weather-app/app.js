const geocode = require(`./utils/geocode`);
const forecast = require(`./utils/forecast`)


geocode(`Chattanooga`, (error, { latitude, longitude, location }) => {
    if(error){
        return console.error(error);
    }
    forecast(latitude, longitude, (error, data) => {
        console.log(location);
        console.log(data);
    })
})





