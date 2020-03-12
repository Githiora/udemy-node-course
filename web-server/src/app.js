const express = require(`express`);
const path = require(`path`);
const hbs = require(`hbs`);
const geocode = require(`./utils/geocode`);
const forecast = require(`./utils/forecast`);


const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, `../public`);
const viewPath = path.join(__dirname, `../templates/views`);
const partialsPath = path.join(__dirname, `../templates/partials`);

// Setup handlebars engine and views location
app.set(`view engine`, `hbs`);
app.set(`views`, viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get(``, (req, res) => { 
    res.render(`index`, {
        title: `Weather App`,
        name: `Gabriel Wamunyu`
    });
});

app.get(`/about`, (req, res) => {
    res.render(`about`, {
        title: `About me`,
        name: `Gabriel Wamunyu`
    });
})

app.get(`/help`, (req, res) => {
    res.render(`help`, {
        title: `This is the help page`,
        name: `Gabriel Wamunyu`
    });
})

app.get(`/weather`, (req, res) => {

    if(!req.query.address){
        return res.send({
            error: `You must provide an address`
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if(error){
            return res.send({
                error: error
            })
        }
        forecast(latitude, longitude, (error, data) => {
            if(error){
                return res.send({
                    error // shorthand
                })
            }

            res.send({
                forecast: data,
                location,
                address: req.query.address
            })
        })
    })
    
})

app.get(`/products`, (req, res) => {
    
    if(!req.query.search){
        return res.send({
            error: `You must provide a search term`
        });
    }
    res.send({
        products: []
    })
})

app.get(`/help/*`, (req, res) => {
    res.render(`404`, {
        title: `404`,
        name: `Gabriel Wamunyu`,
        errorMessage: `Help article not found`
    });
})

app.get(`*`, (req, res) => {
    res.render(`404`, {
        title: `404`,
        name: `Gabriel Wamunyu`,
        errorMessage: `Page not found`
    });
})


app.listen(3030, () => {
    console.log(`server listening on port 3030`)
})