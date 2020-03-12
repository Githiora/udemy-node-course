const express = require(`express`);
const path = require(`path`);

const app = express();


const publicDirectoryPath = path.join(__dirname, `../public`);

app.set(`view engine`, `hbs`);
app.use(express.static(publicDirectoryPath));


app.get(`/weather`, (req, res) => {
    res.send({
        forecast: `It's gonna be hella hot`,
        location: `Chattanooga`
    })
})


app.listen(3030, () => {
    console.log(`server listening on port 3030`)
})