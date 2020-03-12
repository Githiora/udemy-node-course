const express = require(`express`);
const path = require(`path`);
const hbs = require(`hbs`);


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
    res.send({
        forecast: `It's gonna be hella hot`,
        location: `Chattanooga`
    })
})


app.listen(3030, () => {
    console.log(`server listening on port 3030`)
})