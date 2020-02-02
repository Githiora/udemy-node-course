const request = require(`request`);


const geocode = (address, callback) => {

    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZ2FicmllbHdhbXVueXUiLCJhIjoiY2s2MnRtYWFkMDE0OTNsbjAxcXRvdTduNyJ9.SVYBFZkwMQ2XXuow-1cXsQ&limit=1`;

    request({ url: mapBoxUrl, json: true }, (error, response) => {
        if(error){
            callback(`Unable to fetch data`, undefined);
        }else if(response.body.features.length === 0){
            callback(`Unable to find location`, undefined);
        }else{
            const data = response.body;
            const [ lng, lat ] = data.features[0].center;
            const location = data.features[0].place_name;
            callback(undefined, {
                latitude: lat,
                longitude: lng,
                location: location
            })
        }
        
    })
}


module.exports = geocode;